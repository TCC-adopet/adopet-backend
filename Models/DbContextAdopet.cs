using Microsoft.EntityFrameworkCore;
using AdopetMeApi.Models;

public class DbContextAdopet : DbContext
{
    public DbContextAdopet(DbContextOptions<DbContextAdopet> options)
        : base(options)
    {
    }

    public DbSet<pessoaApi> pessoa { get; set; }
}