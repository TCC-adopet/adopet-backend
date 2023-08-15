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
    public class ControladorCidades : ControllerBase
    {
        private readonly DbContextCidades _context;

        public ControladorCidades(DbContextCidades context)
        {
            _context = context;
        }

        // GET: api/ControladorCidades
        [HttpGet]
        public async Task<ActionResult<IEnumerable<cidadeApi>>> GetCidades()
        {
          if (_context.Cidades == null)
          {
              return NotFound();
          }
            return await _context.Cidades.ToListAsync();
        }

        // GET: api/ControladorCidades/5
        [HttpGet("{id}")]
        public async Task<ActionResult<cidadeApi>> GetcidadeApi(int id)
        {
          if (_context.Cidades == null)
          {
              return NotFound();
          }
            var cidadeApi = await _context.Cidades.FindAsync(id);

            if (cidadeApi == null)
            {
                return NotFound();
            }

            return cidadeApi;
        }
    }
}
