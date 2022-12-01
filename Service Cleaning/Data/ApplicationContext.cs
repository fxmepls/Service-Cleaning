using Microsoft.EntityFrameworkCore;
using Service_Cleaning.Models;

namespace Service_Cleaning.Data {
    public class ApplicationContext : DbContext {
        public DbSet<User> Users { get; set; } = null!;
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) {
            Database.EnsureDeleted();
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            // использование Fluent API
            base.OnModelCreating(modelBuilder);
        }
    }
}
