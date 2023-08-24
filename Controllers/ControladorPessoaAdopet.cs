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
    public class ControladorPessoaAdopet : ControllerBase
    {
        private readonly DbContextAdopet _context;

        public ControladorPessoaAdopet(DbContextAdopet context)
        {
            _context = context;
        }

        // GET: api/ControladorPessoaAdopet
        [HttpGet]
        public async Task<ActionResult<IEnumerable<pessoaApi>>> Getpessoa()
        {
          if (_context.pessoa == null)
          {
              return NotFound();
          }
            return await _context.pessoa.ToListAsync();
        }

        // GET: api/ControladorPessoaAdopet/5
        [HttpGet("{id}")]
        public async Task<ActionResult<pessoaApi>> GetpessoaApi(int id)
        {
          if (_context.pessoa == null)
          {
              return NotFound();
          }
            var pessoaApi = await _context.pessoa.FindAsync(id);

            if (pessoaApi == null)
            {
                return NotFound();
            }

            return pessoaApi;
        }

        // PUT: api/ControladorPessoaAdopet/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePessoaApi(int id, [FromForm] PessoaApiUpdateDto dto)//seleciona o id e as informações do formulario de acordo com a classe pessoaApiUpdateDto e apelida a classe de dto
        {
            var pessoaApi = await _context.pessoa.FindAsync(id);
            if (pessoaApi == null)
            {
                return NotFound();
            }

            //caso haja alteração no formulario de atualizar, sobreescreve a informação da pessoa no banco de dados
            if (Validation.IsValid(dto.nome))
            {
                pessoaApi.nome = dto.nome;
            }
            if(Validation.IsValid(dto.sobreNome)){
                pessoaApi.sobreNome = dto.nome;
            }
            if(Validation.IsValid(dto.idCidade)){
                pessoaApi.idCidade = dto.idCidade;
            }
            if(Validation.IsValid(dto.rua)){
                pessoaApi.rua = dto.rua;
            }
            if(Validation.IsValid(dto.numeroCasa)){
                pessoaApi.numeroCasa = dto.numeroCasa;
            }
            if(Validation.IsValid(dto.codCEP)){
                pessoaApi.codCEP = dto.codCEP;
            }
            if(Validation.IsValid(dto.sexo)){
                pessoaApi.sexo = dto.sexo;
            }
            if(Validation.IsValid(dto.apelido)){
                pessoaApi.apelido = dto.apelido;
            }
            if(Validation.IsValid(dto.numeroTelefone)){
                pessoaApi.numeroTelefone = dto.numeroTelefone;
            }
            if(Validation.IsValid(dto.senha)){
                pessoaApi.senha = dto.senha;
            }
            if(Validation.isValidDate(dto.dataNascimento)){
                pessoaApi.dataNascimento = dto.dataNascimento;
            }

            if (Validation.isValidImage(dto.arquivo))
            {
                using (var memoryStream = new MemoryStream())
                {
                    await dto.arquivo.CopyToAsync(memoryStream);
                    pessoaApi.imagem = memoryStream.ToArray();
                }
            }

            await _context.SaveChangesAsync();

            return NoContent();
        }
        // POST: api/ControladorPessoaAdopet
        [HttpPost]
        public async Task<IActionResult> PostPessoaApi([FromForm] PessoaApiUploadDto dto)//pega os dados do formulario, que são enviados para a classe PessoaApiUploadDto criado somente para converter a imagem em um blob para a inserção no banco de dados
{
    if (!Validation.IsValid(dto.nome))
    {
        return BadRequest("Nenhuma informação enviada.");
    }

    
    var novaPessoa = new pessoaApi();
    novaPessoa = Validation.SalvarNoBanco(novaPessoa,dto);
    if(Validation.isValidImage(dto.arquivo))
    {
        using (var memoryStream = new MemoryStream())
        {
            await dto.arquivo.CopyToAsync(memoryStream);//copiando o arquivo de imagem para o memoryStream, para guardar a imagem em memoria antes de passar para o array de bytes
            novaPessoa.imagem = memoryStream.ToArray();//passando o array de bytes guardado em memoria para a variavel do tipo array de byte chamada imagem
        }
    }

    _context.pessoa.Add(novaPessoa);//adicionando na tabela pessoa o contexto do objeto novaPessoa
    await _context.SaveChangesAsync();//esperando o programa salvar as alterações

    return Ok("dados salvo com sucesso.");
}
 // DELETE: api/TesteImagem/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTesteImagem(int id)
        {
            if (_context.pessoa == null)
            {
                return NotFound();
            }
            var pessoaApi = await _context.pessoa.FindAsync(id);
            if (pessoaApi == null)
            {
                return NotFound();
            }

            _context.pessoa.Remove(pessoaApi);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
