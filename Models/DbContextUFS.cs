//codigo usado para linkar a tabela no banco de dados com a classe especifica

using Microsoft.EntityFrameworkCore;
using AdopetMeApi.Models;

public class DbContextUFS : DbContext
{
    public DbContextUFS(DbContextOptions<DbContextUFS> options)
        : base(options)
    {
    }

    public DbSet<UfApi> UFs { get; set; }
}