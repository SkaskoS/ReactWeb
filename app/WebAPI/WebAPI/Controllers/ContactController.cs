using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;
using System.Net;
using System.Net.Mail;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly IConfiguration _config;

        public ContactController(IConfiguration config)
        {
            _config = config;
        }
        [EnableRateLimiting("contactPolicy")]
        [HttpPost]
        public async Task<IActionResult> Post(ContactRequest request)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var gmailEmail = _config["Gmail:Email"];
                var gmailPassword = _config["Gmail:AppPassword"];

                if (string.IsNullOrEmpty(gmailEmail) || string.IsNullOrEmpty(gmailPassword))
                    return StatusCode(500, "Email configuration missing.");

                var smtpClient = new SmtpClient("smtp.gmail.com")
                {
                    Port = 587,
                    Credentials = new NetworkCredential(gmailEmail, gmailPassword),
                    EnableSsl = true,
                };

                var mail = new MailMessage
                {
                    From = new MailAddress(gmailEmail),
                    Subject = $"Portfolio Message from {request.Name}",
                    Body = $@"
                        Name: {request.Name}
                        Email: {request.Email}

                        Message:
                        {request.Message}"
                };

                mail.To.Add(gmailEmail);

                await smtpClient.SendMailAsync(mail);

                return Ok(new { success = true });
            }
            catch
            {
                return StatusCode(500, new { success = false });
            }
        }
    }
}