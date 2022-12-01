using Service_Cleaning;
using Service_Cleaning.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment()) {
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();

static void Main(string[] args) {
    // добавление данных
    using (ApplicationContext db = new ApplicationContext()) {
        // создаем два объекта User
        User user1 = new User { FullName = "Tom", Number = "79993334422" };
        User user2 = new User { FullName = "Alice", Number = "79993334422" };

        // добавляем их в бд
        db.Users.AddRange(user1, user2);
        db.SaveChanges();
    }
    // получение данных
    using (ApplicationContext db = new ApplicationContext()) {
        // получаем объекты из бд и выводим на консоль
        var users = db.Users.ToList();
        Console.WriteLine("Users list:");
        foreach (User u in users) {
            Console.WriteLine($"{u.Id}.{u.FullName} - {u.Number}");
        }
    }
}
