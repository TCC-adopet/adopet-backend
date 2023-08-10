using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AdopetMeApi.Models;

namespace AdopetMeApi.Controllers
{
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
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePessoaApi(int id, [FromForm] PessoaApiUpdateDto dto)//seleciona o id e as informações do formulario de acordo com a classe pessoaApiUpdateDto e apelida a classe de dto
        {
            var pessoaApi = await _context.pessoa.FindAsync(id);//pegando a pessoa que tem o id informado igual no banco de dados 

            if (pessoaApi == null)
            {
                return NotFound();
            }

            //caso haja alteração no formulario de atualizar, sobreescreve a informação da pessoa no banco de dados
            if (dto.nome != null)
            {
                pessoaApi.nome = dto.nome;
            }
            if(dto.sobreNome != null){
                pessoaApi.sobreNome = dto.nome;
            }
            if(dto.idCidade != null){
                pessoaApi.idCidade = dto.idCidade;
            }
            if(dto.rua != null){
                pessoaApi.rua = dto.rua;
            }
            if(dto.numeroCasa != null){
                pessoaApi.numeroCasa = dto.numeroCasa;
            }
            if(dto.codCEP != null){
                pessoaApi.codCEP = dto.codCEP;
            }
            if(dto.sexo != null){
                pessoaApi.sexo = dto.sexo;
            }
            if(dto.apelido != null){
                pessoaApi.apelido = dto.apelido;
            }
            if(dto.numeroTelefone != null){
                pessoaApi.numeroTelefone = dto.numeroTelefone;
            }
            if(dto.senha != null){
                pessoaApi.senha = dto.senha;
            }
            if(dto.dataNascimento != null){
                pessoaApi.dataNascimento = dto.dataNascimento;
            }

            if (dto.arquivo != null)
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
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<IActionResult> PostPessoaApi([FromForm] PessoaApiUploadDto dto)//pega os dados do formulario, que são enviados para a classe PessoaApiUploadDto criado somente para converter a imagem em um blob para a inserção no banco de dados
{
    if (dto.nome == null)
    {
        return BadRequest("Nenhuma informação enviada.");
    }

    
    var novaPessoa = new pessoaApi //criando uma nova pessoa com base na classe pessoaApi dentro de Models
    {
        //passando as informações da classe PessoaApiUploadDto que esta com o apelido de dto para o item novaPessoa que se baseia na classe pessoaApi
        nome = dto.nome,
        sobreNome = dto.sobreNome,
        codCpf = dto.codCpf,
        idCidade = dto.idCidade,
        rua = dto.rua,
        numeroCasa = dto.numeroCasa,
        codCEP = dto.codCEP,
        sexo = dto.sexo,
        apelido = dto.apelido,
        numeroTelefone = dto.numeroTelefone,
        senha = dto.senha,
        dataNascimento = dto.dataNascimento        
    };
    if(dto.arquivo != null)
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

        private bool pessoaApiExists(int id)
        {
            return (_context.pessoa?.Any(e => e.idPessoa == id)).GetValueOrDefault();
        }
    }
}
