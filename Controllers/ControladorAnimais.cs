using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AdopetMeApi.Models;
using AdopetMeApi.function;

namespace AdopetMeApi.Controllers
{
    //endpoint para fazer o CRUD na tabela especificada
    [Route("api/[controller]")]
    [ApiController]
    public class ControladorAnimais : ControllerBase
    {
        private readonly DbContextAnimal _context;

        public ControladorAnimais(DbContextAnimal context)
        {
            _context = context;
        }

        // GET: api/ControladorAnimais
        [HttpGet]
        public async Task<ActionResult<IEnumerable<animalApi>>> GetAnimal()
        {
          if (_context.Animal == null)
          {
              return NotFound();
          }
            return await _context.Animal.ToListAsync();
        }

        // GET: api/ControladorAnimais/5
        [HttpGet("{id}")]
        public async Task<ActionResult<animalApi>> GetanimalApi(int id)
        {
          if (_context.Animal == null)
          {
              return NotFound();
          }
            var animalApi = await _context.Animal.FindAsync(id);

            if (animalApi == null)
            {
                return NotFound();
            }

            return animalApi;
        }

        // PUT: api/ControladorAnimais/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAnimalApi(int id, [FromForm] animalUpdateApi dto)//seleciona o id e as informações do formulario de acordo com a classe pessoaApiUpdateDto e apelida a classe de dto
        {
            var animalApi = await _context.Animal.FindAsync(id);//pegando a pessoa que tem o id informado igual no banco de dados 

            if (animalApi == null)
            {
                return NotFound();
            }
            //caso haja alteração no formulario de atualizar, sobreescreve a informação da pessoa no banco de dados
            object? pet = null;
            var AnimalApiUpdate = new animalUpdateApi();
            pet = Validation.PegarPropriedades(AnimalApiUpdate,dto);
            animalApi = Validation.updateEntityBd(animalApi,pet);
            if (dto.imagem != null)
            {
                using (var memoryStream = new MemoryStream())
                {
                    await dto.imagem.CopyToAsync(memoryStream);
                    animalApi.imagem = memoryStream.ToArray();
                }
            }

            await _context.SaveChangesAsync();

            return NoContent();
        }

        // POST: api/ControladorAnimais
        [HttpPost]
        public async Task<IActionResult> PostAnimalApi([FromForm] animalUploadApi dto)//pega os dados do formulario, que são enviados para a classe PessoaApiUploadDto criado somente para converter a imagem em um blob para a inserção no banco de dados
{
    if (dto.nomeAnimal==null)
    {
        return BadRequest("Por favor, insira um nome ao pet.");
    }
    if(dto.tipoRaca == "C"){
        dto.racaGato = null;
        dto.vacinaGato = null;
    }
    else if (dto.tipoRaca == "G"){
        dto.racaCachorro = null;
        dto.vacinaCachorro = null;
    }
    else if(dto.tipoRaca==null){

    }
    else{
        return BadRequest("tipo do pet invalido.");
    }

    
    var novoAnimal = new animalApi(); //criando uma nova pessoa com base na classe pessoaApi dentro de Models
    novoAnimal = Validation.SalvarNoBanco(novoAnimal,dto);
    if(dto.imagem!=null)
    {
        using (var memoryStream = new MemoryStream())
        {
            await dto.imagem.CopyToAsync(memoryStream);//copiando o arquivo de imagem para o memoryStream, para guardar a imagem em memoria antes de passar para o array de bytes
            novoAnimal.imagem = memoryStream.ToArray();//passando o array de bytes guardado em memoria para a variavel do tipo array de byte chamada imagem
        }
    }

    _context.Animal.Add(novoAnimal);//adicionando na tabela pessoa o contexto do objeto novaPessoa
    await _context.SaveChangesAsync();//esperando o programa salvar as alterações

    return Ok("dados salvo com sucesso.");
}

        // DELETE: api/ControladorAnimais/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteanimalApi(int id)
        {
            if (_context.Animal == null)
            {
                return NotFound();
            }
            var animalApi = await _context.Animal.FindAsync(id);
            if (animalApi == null)
            {
                return NotFound();
            }

            _context.Animal.Remove(animalApi);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool animalApiExists(int id)
        {
            return (_context.Animal?.Any(e => e.idAnimal == id)).GetValueOrDefault();
        }
    }
}
