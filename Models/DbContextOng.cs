using Microsoft.EntityFrameworkCore;
using AdopetMeApi.Models;

public class DbContextOng : DbContext
{
    public DbContextOng(DbContextOptions<DbContextOng> options)
        : base(options)
    {
    }

    public DbSet<ongApi> Ong { get; set; }
}