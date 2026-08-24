using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Models;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ContactController(ApplicationDbContext context)
        {
            _context = context;
        }

        // POST: api/Contact
        [HttpPost]
        public async Task<IActionResult> CreateMessage(
            [FromBody] ContactMessage contactMessage)
        {
            if (string.IsNullOrWhiteSpace(contactMessage.Name))
            {
                return BadRequest(new
                {
                    message = "Name is required."
                });
            }

            if (string.IsNullOrWhiteSpace(contactMessage.Email))
            {
                return BadRequest(new
                {
                    message = "Email is required."
                });
            }

            if (string.IsNullOrWhiteSpace(contactMessage.Message))
            {
                return BadRequest(new
                {
                    message = "Message is required."
                });
            }

            contactMessage.CreatedAt = DateTime.UtcNow;

            // Make sure SQL Server generates the ID
            contactMessage.Id = 0;

            _context.ContactMessages.Add(contactMessage);

            await _context.SaveChangesAsync();

            return Ok(new
            {
                message = "Your message has been submitted successfully.",
                id = contactMessage.Id
            });
        }

        // GET: api/Contact
        [HttpGet]
        public async Task<IActionResult> GetMessages()
        {
            var messages = await _context.ContactMessages
                .OrderByDescending(x => x.CreatedAt)
                .ToListAsync();

            return Ok(messages);
        }
    }
}