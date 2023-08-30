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
    public class ControladorVacinasCaninas : ControllerBase
    {
        private readonly DbContextVacinasCaninas _context;

        public ControladorVacinasCaninas(DbContextVacinasCaninas context)
        {
            _context = context;
        }

        // GET: api/ControladorVacinasCaninas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<vacinasCaninasApi>>> GetVacinasCaninas()
        {
          if (_context.VacinasCaninas == null)
          {
              return NotFound();
          }
            return await _context.VacinasCaninas.ToListAsync();
        }

        // GET: api/ControladorVacinasCaninas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<vacinasCaninasApi>> GetvacinasCaninasApi(string id)
        {
          if (_context.VacinasCaninas == null)
          {
              return NotFound();
          }
            var vacinasCaninasApi = await _context.VacinasCaninas.FindAsync(id);

            if (vacinasCaninasApi == null)
            {
                return NotFound();
            }

            return vacinasCaninasApi;
        }
    }
}
