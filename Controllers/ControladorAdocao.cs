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
    public class ControladorAdocao : ControllerBase
    {
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
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAdocaoApi(int id, [FromForm] adocaoUpdateApi dto)
        {
            var adocaoApi = await _context.Adocao.FindAsync(id);

            if (adocaoApi == null)
            {
                return NotFound();
            }

            if (dto.petAdotado != null)
            {
                adocaoApi.petAdotado = dto.petAdotado;
            }
            if(dto.dataAdocao != null){
                adocaoApi.dataAdocao = dto.dataAdocao;
            }
            if(dto.dataRecusa != null){
                adocaoApi.dataRecusa = dto.dataRecusa;
            }

            await _context.SaveChangesAsync();

            return NoContent();
        }

        // POST: api/ControladorAdocao
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<IActionResult> PostAdocaoApi([FromForm] adocaoUploadApi dto)
        {
        if (dto.idPedido == null)
        {
            return BadRequest("Por favor, insira um nome ao pet.");
        }

        
        var novaAdocao = new adocaoApi
        {
            idPedido = dto.idPedido,
            petAdotado = dto.petAdotado,
            dataAdocao = dto.dataAdocao,
            dataRecusa = dto.dataRecusa,
            idAnimal = dto.idAnimal
        };

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

        private bool adocaoApiExists(string id)
        {
            return (_context.Adocao?.Any(e => e.idAdocao == id)).GetValueOrDefault();
        }
    }
}
