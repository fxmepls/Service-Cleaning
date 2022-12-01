using System.ComponentModel.DataAnnotations.Schema;

namespace Service_Cleaning.Models {
    [Table("User")]
    public class User {

        [Column("user_id")]
        public int Id { get; set; }
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
    }
}
