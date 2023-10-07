using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PharmacyAPI.Context;
using PharmacyAPI.Models;

namespace PharmacyAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedbackController : Controller
    {
        private readonly AppDbContext _context;
        public FeedbackController(AppDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        [Route("GetFeedback")]
        public async Task<IEnumerable<Feedback>> GetFeedback()
        {
            return await _context.feedbacks.ToListAsync();
        }

        [HttpPost]
        [Route("AddFeedback")]
        public async Task<Feedback> AddFeedback(Feedback feed)
        {
            _context.feedbacks.Add(feed);
            await _context.SaveChangesAsync();
            return feed;
        }

        [HttpPatch]
        [Route("UpdateFeedback/{id}")]
        public async Task<Feedback> UpdateFeedback(Feedback feed)
        {
            _context.Entry(feed).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return feed;
        }

        [HttpDelete]
        [Route("DeleteFeedback/{id}")]
        public bool DeleteFeedback(int id)
        {
            bool a = false;
            var user = _context.feedbacks.Find(id);
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

    


    /*        public IActionResult Index()
            {
                return View();
            }*/
}
}
