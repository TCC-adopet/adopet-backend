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
    //endpoint para fazer o CRUD na tabela especificada
    [Route("api/[controller]")]
    [ApiController]
    public class ControladorVacinasFelinas : ControllerBase
    {
        private readonly DbContextVacinasFelinas _context;

        public ControladorVacinasFelinas(DbContextVacinasFelinas context)
        {
            _context = context;
        }

        // GET: api/ControladorVacinasFelinas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<vacinasFelinasApi>>> GetVacinasFelinas()
        {
          if (_context.VacinasFelinas == null)
          {
              return NotFound();
          }
            return await _context.VacinasFelinas.ToListAsync();
        }

        // GET: api/ControladorVacinasFelinas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<vacinasFelinasApi>> GetvacinasFelinasApi(string id)
        {
          if (_context.VacinasFelinas == null)
          {
              return NotFound();
          }
            var vacinasFelinasApi = await _context.VacinasFelinas.FindAsync(id);

            if (vacinasFelinasApi == null)
            {
                return NotFound();
            }

            return vacinasFelinasApi;
        }
    }
}
