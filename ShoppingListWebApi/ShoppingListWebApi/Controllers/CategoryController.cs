using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace ShoppingList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public CategoryController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [Route("GetAllCategories")]
        public string GetCategories()
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("AppConnect").ToString());
            SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM Categories", con);
            DataTable dt = new DataTable();
            da.Fill(dt);
            List<Categories> CategoryList = new List<Categories>();
            Response response = new Response();

            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    Categories category = new Categories();
                    category.CategoryID = Convert.ToInt32(dt.Rows[i]["CategoryID"]);
                    category.CategoryName = Convert.ToString(dt.Rows[i]["CategoryName"]);
                    CategoryList.Add(category);
                }
            }
            if (CategoryList.Count > 0)
                return JsonConvert.SerializeObject(CategoryList);

            else
            {
                Response.StatusCode = 100;
                response.ErrorMessage = "No data found";
                return JsonConvert.SerializeObject(response);
            }
        }
    }
}