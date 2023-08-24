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
    public class ControladorAdocao : ControllerBase
    {
        int variavelId;
        private readonly DbContextAdocao _context;

        public ControladorAdocao(DbContextAdocao context)
        {
            _context = context;
        }

        // GET: api/ControladorAdocao
        [HttpGet]
        public async Task<ActionResult<IEnumerable<adocaoApi>>> GetAdocao()
        {
          if (_context.Adocao == null)
          {
              return NotFound();
          }
            return await _context.Adocao.ToListAsync();
        }

        // GET: api/ControladorAdocao/5
        [HttpGet("{id}")]
        public async Task<ActionResult<adocaoApi>> GetadocaoApi(string id)
        {
          if (_context.Adocao == null)
          {
              return NotFound();
          }
            var adocaoApi = await _context.Adocao.FindAsync(id);

            if (adocaoApi == null)
            {
                return NotFound();
            }

            return adocaoApi;
        }

        // PUT: api/ControladorAdocao/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAdocaoApi(int id, [FromForm] adocaoUpdateApi dto)
        {
            var adocaoApi = await _context.Adocao.FindAsync(id);

            if (adocaoApi == null)
            {
                return NotFound();
            }
            object? adocao = null;
            var AdocaoUpdate = new adocaoUpdateApi();
            adocao = Validation.PegarPropriedades(AdocaoUpdate,dto);
            adocaoApi = Validation.updateEntityBd(adocaoApi,adocao);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // POST: api/ControladorAdocao
        [HttpPost]
        public async Task<IActionResult> PostAdocaoApi([FromForm] adocaoUploadApi dto)
        {
        if (dto.idPedido==null)
        {
            return BadRequest("pedido não encontrado!");
        }

        var novaAdocao = new adocaoApi();
        novaAdocao = Validation.SalvarNoBanco(novaAdocao,dto);
        novaAdocao.idAdocao= Interlocked.Increment(ref variavelId);
        _context.Adocao.Add(novaAdocao);
        await _context.SaveChangesAsync();

        return Ok("dados salvo com sucesso.");
        }

        // DELETE: api/ControladorAdocao/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteadocaoApi(string id)
        {
            if (_context.Adocao == null)
            {
                return NotFound();
            }
            var adocaoApi = await _context.Adocao.FindAsync(id);
            if (adocaoApi == null)
            {
                return NotFound();
            }

            _context.Adocao.Remove(adocaoApi);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
