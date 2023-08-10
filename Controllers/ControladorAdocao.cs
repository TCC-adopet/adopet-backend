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
        public async Task<IActionResult> PutadocaoApi(string id, adocaoApi adocaoApi)
        {
            if (id != adocaoApi.idAdocao)
            {
                return BadRequest();
            }

            _context.Entry(adocaoApi).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!adocaoApiExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ControladorAdocao
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<adocaoApi>> PostadocaoApi(adocaoApi adocaoApi)
        {
          if (_context.Adocao == null)
          {
              return Problem("Entity set 'DbContextAdocao.Adocao'  is null.");
          }
            _context.Adocao.Add(adocaoApi);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (adocaoApiExists(adocaoApi.idAdocao))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetadocaoApi", new { id = adocaoApi.idAdocao }, adocaoApi);
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
