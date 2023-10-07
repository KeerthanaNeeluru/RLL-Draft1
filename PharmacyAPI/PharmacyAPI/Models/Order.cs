using System.ComponentModel.DataAnnotations;

namespace PharmacyAPI.Models
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }
        public string Address {  get; set; }
        public string UserName { get; set; }
        public int Total {  get; set; }
        public int OrderStatus { get; set; }

    }
}
