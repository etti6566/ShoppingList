using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using ShoppingListWebApi;
using System;
using System.Data.Common;
using System.Data.SqlClient;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var MyAppOrigin = "MyAppOrigin";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAppOrigin,
        policy =>
        {
            policy.WithOrigins("http://localhost:3000")
            .AllowAnyHeader().AllowAnyMethod();
        });
});
builder.Services.AddDbContext<MyDbContext>(options =>
           options.UseSqlServer(builder.Configuration.GetConnectionString("AppConnect")));



var app = builder.Build();

    // Configure the HTTP request pipeline.
    if (app.Environment.IsDevelopment())
    {
        app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(MyAppOrigin);

app.UseAuthorization();
app.MapControllers();
app.Run();
