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
    public class ControladorPedidoAdocoes : ControllerBase
    {
        private readonly DbContextPedidoAdocao _context;

        public ControladorPedidoAdocoes(DbContextPedidoAdocao context)
        {
            _context = context;
        }

        // GET: api/ControladorPedidoAdocoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<pedidoAdocaoApi>>> GetPedidoAdocao()
        {
          if (_context.PedidoAdocao == null)
          {
              return NotFound();
          }
            return await _context.PedidoAdocao.ToListAsync();
        }

        // GET: api/ControladorPedidoAdocoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<pedidoAdocaoApi>> GetpedidoAdocaoApi(string id)
        {
          if (_context.PedidoAdocao == null)
          {
              return NotFound();
          }
            var pedidoAdocaoApi = await _context.PedidoAdocao.FindAsync(id);

            if (pedidoAdocaoApi == null)
            {
                return NotFound();
            }

            return pedidoAdocaoApi;
        }
        // POST: api/ControladorPedidoAdocoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
         public async Task<IActionResult> pedidoAdocaoUploadApi([FromForm] pedidoAdocaoUploadApi dto)
        {
        if (dto.idPessoa == null)
        {
            return BadRequest("Nenhuma informação enviada.");
        }

        
        var novoPedido = new pedidoAdocaoApi 
        {
            idPessoa = dto.idPessoa,
            dataPedido = dto.dataPedido,
            idONG = dto.idONG
        };

        _context.PedidoAdocao.Add(novoPedido);
        await _context.SaveChangesAsync();

        return Ok("dados salvo com sucesso.");
        }

        // DELETE: api/ControladorPedidoAdocoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletepedidoAdocaoApi(string id)
        {
            if (_context.PedidoAdocao == null)
            {
                return NotFound();
            }
            var pedidoAdocaoApi = await _context.PedidoAdocao.FindAsync(id);
            if (pedidoAdocaoApi == null)
            {
                return NotFound();
            }

            _context.PedidoAdocao.Remove(pedidoAdocaoApi);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool pedidoAdocaoApiExists(string id)
        {
            return (_context.PedidoAdocao?.Any(e => e.idPedido == id)).GetValueOrDefault();
        }
    }
}
