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
    public class ControladorUf : ControllerBase
    {
        private readonly DbContextUFS _context;

        public ControladorUf(DbContextUFS context)
        {
            _context = context;
        }

        // GET: api/ControladorUf
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UfApi>>> GetUFs()
        {
          if (_context.UFs == null)
          {
              return NotFound();
          }
            return await _context.UFs.ToListAsync();
        }

        // GET: api/ControladorUf/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UfApi>> GetUfApi(string id)
        {
          if (_context.UFs == null)
          {
              return NotFound();
          }
            var ufApi = await _context.UFs.FindAsync(id);

            if (ufApi == null)
            {
                return NotFound();
            }

            return ufApi;
        }
    }
}
