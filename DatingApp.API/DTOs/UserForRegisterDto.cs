using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.DTOs
{
    public class UserForRegisterDto
    {
        [Required]
        [StringLength(20, MinimumLength=4, ErrorMessage="طول باید بین 4 و 20 باشد")]
        public string UserName { get; set; }

        [Required]
        public string Password { get; set; }
    }
}