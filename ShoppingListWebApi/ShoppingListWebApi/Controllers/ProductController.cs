using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ShoppingList;
using System.Data.SqlClient;
using System.Data;
using System.Net;
using Microsoft.SqlServer.Server;
using System.Security.Principal;
using System.Linq;
using Newtonsoft.Json.Serialization;
using Microsoft.EntityFrameworkCore;
using Polly;
using System.Net.Http;
using Microsoft.Extensions.Hosting;

namespace ShoppingListWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly List<Products> _products = new List<Products>();

        private MyDbContext dbContext;

        public readonly IConfiguration _configuration;
        public ProductController(IConfiguration configuration, MyDbContext _dbContext)
        {
            _configuration = configuration;
            dbContext = _dbContext;
        }

        [HttpGet]
        [Route("GetAllProducts")]
        public string GetProducts()
        {
            SqlConnection con = new SqlConnection(_configuration.GetConnectionString("AppConnect").ToString());
            SqlDataAdapter da = new SqlDataAdapter("SELECT * FROM Products", con);
            DataTable dt = new DataTable();
            da.Fill(dt);
            List<Products> ProductList = new List<Products>();
            Response response = new Response();

            if (dt.Rows.Count > 0)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    Products product = new Products()
                    {
                        ProductID = (int)dt.Rows[i]["ProductID"],
                        ProductName = (string)dt.Rows[i]["ProductName"],
                        Price = (double)dt.Rows[i]["Price"],
                    };
                    ProductList.Add(product);
                }
            }

            if (ProductList.Count > 0)
            {
                return JsonConvert.SerializeObject(ProductList);
            }

            else
            {
                Response.StatusCode = 100;
                response.ErrorMessage = "No data found";
                return JsonConvert.SerializeObject(response);
            }
        }

        [HttpPost]
        [Route("CreateProduct")]
        public IActionResult CreateProduct(string _productname, string _categoryName)
        {
            Products newProduct = new Products();
            newProduct.ProductName = _productname;
            using (dbContext)
            {
                if (newProduct == null || dbContext.Products.FirstOrDefault(x => x.ProductName == newProduct.ProductName) != null)
                {
                    return BadRequest("Invalid product data");
                }

                Categories category = dbContext.Categories.FirstOrDefault(a => a.CategoryName == _categoryName);

                if (category == null)
                {
                    return BadRequest("Invalid category name");
                }
                newProduct.Category = category;
                dbContext.Products.Add(newProduct);
                dbContext.SaveChanges();
                // Assuming you might return the newly created product or its ID in the response
                return CreatedAtAction(nameof(GetProducts), new { id = newProduct.ProductID, newProduct });
            }
        }
    }
}