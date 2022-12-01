using Microsoft.EntityFrameworkCore;
using Service_Cleaning.Models;

namespace Service_Cleaning {
    public class ApplicationContext : DbContext {
        public DbSet<User> Users { get; set; }
        public ApplicationContext() {
            Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            optionsBuilder.UseNpgsql("Host=localhost;Port=5432;DataBase=Cleaning_BD;Username=postgres;Password=578380;");
        }
    }
}
