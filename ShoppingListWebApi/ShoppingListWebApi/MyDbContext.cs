using Microsoft.EntityFrameworkCore;
using Polly;
using ShoppingList;
using System;
using System.Collections.Generic;

namespace ShoppingListWebApi
{
    public class MyDbContext:DbContext
    {
        public DbSet<Products> Products { get; set; }
        public DbSet<Categories> Categories { get; set; }

        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {

        }
    }
}
