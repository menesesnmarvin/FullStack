using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ContactsAPI.Models;
using ContactsAPI.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ContactsAPI.Controllers
{
    [Route("api/[controller]")]
    public class ContactController : Controller
    {
        readonly IContactService _contactService;
        public ContactController(IContactService contactService)
        {
            _contactService = contactService;
        }

        // GET: api/<controller>
        [HttpGet]
        public ActionResult<IEnumerable<Contact>> Get()
        {
            //return new string[] { "value1", "value2" };
            return Ok(_contactService.GetContacts());
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public ActionResult<IEnumerable<Contact>> Get(int id)
        {
            return Ok(_contactService.GetContactById(id));
        }

        // POST api/<controller>
        [HttpPost]
        public void Post([FromBody] Contact contact)
        {
            _contactService.CreateContact(contact);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Contact contact)
        {
            _contactService.UpdateContact(id, contact);
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _contactService.DeleteContact(id);
        }
    }
}
