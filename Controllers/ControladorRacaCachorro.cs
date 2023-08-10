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
    public class ControladorRacaCachorro : ControllerBase
    {
        private readonly DbContextRacaCachorros _context;

        public ControladorRacaCachorro(DbContextRacaCachorros context)
        {
            _context = context;
        }

        // GET: api/ControladorRacaCachorro
        [HttpGet]
        public async Task<ActionResult<IEnumerable<racaCachorrosApi>>> GetRacaCachorro()
        {
          if (_context.RacaCachorro == null)
          {
              return NotFound();
          }
            return await _context.RacaCachorro.ToListAsync();
        }

        // GET: api/ControladorRacaCachorro/5
        [HttpGet("{id}")]
        public async Task<ActionResult<racaCachorrosApi>> GetracaCachorrosApi(string id)
        {
          if (_context.RacaCachorro == null)
          {
              return NotFound();
          }
            var racaCachorrosApi = await _context.RacaCachorro.FindAsync(id);

            if (racaCachorrosApi == null)
            {
                return NotFound();
            }

            return racaCachorrosApi;
        }
    }
}
