using System.ComponentModel.DataAnnotations;

namespace PharmacyAPI.Models
{
    public class Feedback
    {
        [Key]
        public int Id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string feedback { get; set; }
    }
}
