using Microsoft.EntityFrameworkCore;
using AdopetMeApi.Models;

public class DbContextAnimal : DbContext
{
    public DbContextAnimal(DbContextOptions<DbContextAnimal> options)
        : base(options)
    {
    }

    public DbSet<animalApi> Animal { get; set; }
}