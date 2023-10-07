using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PharmacyAPI.Context;
using PharmacyAPI.Models;

namespace PharmacyAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : Controller
    {

        private readonly AppDbContext _context;

        public OrdersController(AppDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        [Route("GetOrders")]
        public async Task<IEnumerable<Order>> GetOrders()
        {
            return await _context.Orders.ToListAsync();
        }

        [HttpPost]
        [Route("AddOrder")]
        public async Task<Order> AddOrder(Order objorder)
        {
            _context.Orders.Add(objorder);
            await _context.SaveChangesAsync();
            return objorder;
        }

        [HttpPatch]
        [Route("UpdateOrder/{id}")]
        public async Task<Order> UpdateOrder(Order objorder)
        {
            _context.Entry(objorder).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return objorder;
        }

        [HttpDelete]
        [Route("DeleteOrder/{id}")]
        public bool DeleteOrder(int id)
        {
            bool a = false;
            var user = _context.Orders.Find(id);
            if (user != null)
            {
                a = true;
                _context.Entry(user).State = EntityState.Deleted;
                _context.SaveChanges();
            }
            else
            {
                a = false;
            }
            return a;

        }


        /*public IActionResult Index()
        {
            return View();
        }*/
    }
}
