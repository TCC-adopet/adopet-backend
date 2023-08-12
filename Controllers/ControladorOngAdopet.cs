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
    [Route("api/[controller]")]
    [ApiController]
    public class ControladorOngAdopet : ControllerBase
    {
        private readonly DbContextOng _context;

        public ControladorOngAdopet(DbContextOng context)
        {
            _context = context;
        }

        // GET: api/ControladorOngAdopet
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ongApi>>> GetOng()
        {
          if (_context.Ong == null)
          {
              return NotFound();
          }
            return await _context.Ong.ToListAsync();
        }

        // GET: api/ControladorOngAdopet/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ongApi>> GetongApi(int id)
        {
          if (_context.Ong == null)
          {
              return NotFound();
          }
            var ongApi = await _context.Ong.FindAsync(id);

            if (ongApi == null)
            {
                return NotFound();
            }

            return ongApi;
        }

        // PUT: api/ControladorOngAdopet/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateongApi(int id, [FromForm] ongApiUpdateDto dto)//seleciona o id e as informações do formulario de acordo com a classe pessoaApiUpdateDto e apelida a classe de dto
        {
            var ongApi = await _context.Ong.FindAsync(id);//pegando a pessoa que tem o id informado igual no banco de dados 

            if (!Validation.IsValidClass<ongApi>(ongApi))
            {
                return NotFound();
            }

            //caso haja alteração no formulario de atualizar, sobreescreve a informação da pessoa no banco de dados
            if (Validation.IsValid(dto.nomeEstabelecimento))
            {
                ongApi.nomeEstabelecimento = dto.nomeEstabelecimento;
            }
            if(Validation.IsValid(dto.nomeDiretor)){
                ongApi.nomeDiretor = dto.nomeDiretor;
            }
            if(Validation.IsValid(dto.idCidade)){
                ongApi.idCidade = dto.idCidade;
            }
            if(Validation.IsValid(dto.rua)){
                ongApi.rua = dto.rua;
            }
            if(Validation.IsValid(dto.numeroEstabelecimento)){
                ongApi.numeroEstabelecimento = dto.numeroEstabelecimento;
            }
            if(Validation.IsValid(dto.codCEP)){
                ongApi.codCEP = dto.codCEP;
            }
            if(Validation.IsValid(dto.cpfDiretor)){
                ongApi.cpfDiretor = dto.cpfDiretor;
            }
            if(Validation.IsValid(dto.numeroTelefone)){
                ongApi.numeroTelefone = dto.numeroTelefone;
            }
            if(Validation.IsValid(dto.senha)){
                ongApi.senha = dto.senha;
            }

            if (Validation.isValidImage(dto.arquivo))
            {
                using (var memoryStream = new MemoryStream())
                {
                    await dto.arquivo.CopyToAsync(memoryStream);
                    ongApi.imagem = memoryStream.ToArray();
                }
            }

            await _context.SaveChangesAsync();

            return NoContent();
        }

        // POST: api/ControladorOngAdopet
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<IActionResult> PostOngApi([FromForm] ongApiUploadDto dto)//pega os dados do formulario, que são enviados para a classe PessoaApiUploadDto criado somente para converter a imagem em um blob para a inserção no banco de dados
{
    if (Validation.IsValid(dto.nomeEstabelecimento))
    {
        return BadRequest("Nenhuma informação enviada.");
    }

    
    var novaOng = new ongApi();
    novaOng = Validation.SalvarNoBanco(novaOng,dto);
    if(Validation.isValidImage(dto.arquivo))
    {
        using (var memoryStream = new MemoryStream())
        {
            await dto.arquivo.CopyToAsync(memoryStream);//copiando o arquivo de imagem para o memoryStream, para guardar a imagem em memoria antes de passar para o array de bytes
            novaOng.imagem = memoryStream.ToArray();//passando o array de bytes guardado em memoria para a variavel do tipo array de byte chamada imagem
        }
    }

    _context.Ong.Add(novaOng);//adicionando na tabela pessoa o contexto do objeto novaPessoa
    await _context.SaveChangesAsync();//esperando o programa salvar as alterações

    return Ok("dados salvo com sucesso.");
}

        // DELETE: api/ControladorOngAdopet/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteongApi(int id)
        {
            if (_context.Ong == null)
            {
                return NotFound();
            }
            var ongApi = await _context.Ong.FindAsync(id);
            if (ongApi == null)
            {
                return NotFound();
            }

            _context.Ong.Remove(ongApi);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ongApiExists(int id)
        {
            return (_context.Ong?.Any(e => e.idONG == id)).GetValueOrDefault();
        }
    }
}
