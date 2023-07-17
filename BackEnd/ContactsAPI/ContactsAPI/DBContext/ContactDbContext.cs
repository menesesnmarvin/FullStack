using Microsoft.EntityFrameworkCore;
using ContactsAPI.Models;

namespace ContactsAPI.DBContext
{
    public class ContactDbContext: DbContext
    {
        protected override void OnConfiguring
       (DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase(databaseName: "ContactDb");
        }
        public DbSet<Contact> Contacts { get; set;}
    }
}
