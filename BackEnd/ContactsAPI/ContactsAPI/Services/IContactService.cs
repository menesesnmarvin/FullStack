using ContactsAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ContactsAPI.Services
{
    public interface IContactService
    {
        IEnumerable<Contact> GetContacts();
        Contact GetContactById(int id);
        void CreateContact(Contact contact);
        void UpdateContact(int id, Contact contact);
        void DeleteContact(int id);
    }
}
