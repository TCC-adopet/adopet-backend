using Microsoft.EntityFrameworkCore;
using AdopetMeApi.Models;
using MySql.Data;
//formato aceito de data 2023-08-09T14:30:00

var builder = WebApplication.CreateBuilder(args);
//var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

string mySqlConnection =
    builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContextPool<DbContextAdopet>(options =>
    options.UseMySql(mySqlConnection,
    ServerVersion.AutoDetect(mySqlConnection)));

builder.Services.AddDbContextPool<DbContextOng>(options =>
    options.UseMySql(mySqlConnection,
    ServerVersion.AutoDetect(mySqlConnection)));

builder.Services.AddDbContextPool<DbContextCidades>(options =>
    options.UseMySql(mySqlConnection,
    ServerVersion.AutoDetect(mySqlConnection)));

builder.Services.AddDbContextPool<DbContextUFS>(options =>
    options.UseMySql(mySqlConnection,
    ServerVersion.AutoDetect(mySqlConnection)));

builder.Services.AddDbContextPool<DbContextRacaGatos>(options =>
    options.UseMySql(mySqlConnection,
    ServerVersion.AutoDetect(mySqlConnection)));

builder.Services.AddDbContextPool<DbContextRacaCachorros>(options =>
    options.UseMySql(mySqlConnection,
    ServerVersion.AutoDetect(mySqlConnection)));

builder.Services.AddDbContextPool<DbContextAnimal>(options =>
    options.UseMySql(mySqlConnection,
    ServerVersion.AutoDetect(mySqlConnection)));

builder.Services.AddDbContextPool<DbContextVacinasFelinas>(options =>
    options.UseMySql(mySqlConnection,
    ServerVersion.AutoDetect(mySqlConnection)));

builder.Services.AddDbContextPool<DbContextVacinasCaninas>(options =>
    options.UseMySql(mySqlConnection,
    ServerVersion.AutoDetect(mySqlConnection)));

builder.Services.AddDbContextPool<DbContextPedidoAdocao>(options =>
    options.UseMySql(mySqlConnection,
    ServerVersion.AutoDetect(mySqlConnection)));

builder.Services.AddDbContextPool<DbContextAdocao>(options =>
    options.UseMySql(mySqlConnection,
    ServerVersion.AutoDetect(mySqlConnection)));

/*builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy  =>
                      {
                          policy.WithOrigins("http://adopetme.com",
                                              "http://localhost:5218/api/ControladorPessoaAdopet");
                      });
});*/

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

app.UseAuthorization();

app.MapControllers();

app.Run();
