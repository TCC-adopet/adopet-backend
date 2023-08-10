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
    public class ControladorRacaGatos : ControllerBase
    {
        private readonly DbContextRacaGatos _context;

        public ControladorRacaGatos(DbContextRacaGatos context)
        {
            _context = context;
        }

        // GET: api/ControladorRacaGatos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<racaGatosApi>>> GetRacaGatos()
        {
          if (_context.RacaGatos == null)
          {
              return NotFound();
          }
            return await _context.RacaGatos.ToListAsync();
        }

        // GET: api/ControladorRacaGatos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<racaGatosApi>> GetracaGatosApi(string id)
        {
          if (_context.RacaGatos == null)
          {
              return NotFound();
          }
            var racaGatosApi = await _context.RacaGatos.FindAsync(id);

            if (racaGatosApi == null)
            {
                return NotFound();
            }

            return racaGatosApi;
        }
    }
}
