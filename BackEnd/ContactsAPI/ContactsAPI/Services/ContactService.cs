using ContactsAPI.DBContext;
using ContactsAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactsAPI.Services
{
    public class ContactService : IContactService
    {
        public IEnumerable<Contact> GetContacts()
        {
            using (var context = new ContactDbContext())
            {
                var list = context.Contacts.ToList();
                return list;
            }
        }

        public Contact GetContactById(int id)
        {
            return GetContact(id);
        }

        public void CreateContact(Contact contact)
        {
            using (var context = new ContactDbContext())
            {
                context.Contacts.Add(contact);
                context.SaveChanges();
            }

        }
        public void DeleteContact(int id)
        {
            using (var context = new ContactDbContext())
            {
                var contact = GetContact(id);
                context.Contacts.Remove(contact);
                context.SaveChanges();
            }
        }

        public void UpdateContact(int id, Contact contact)
        {
            using (var context = new ContactDbContext())
            {
                var contactExist = GetContact(id);

                context.Contacts.Update(contact);
                context.SaveChanges();
            }
        }

        private Contact GetContact(int id)
        {
            using (var context = new ContactDbContext())
            {
                var contact = context.Contacts.Find(id);
                return contact == null ? throw new Exception("Contact not found") : contact;
            }
        }
    }
}
