namespace YoloSpaceAPI.Models
{
    public class Photo: BaseModel
    {
        public string Url { get; set; }
        public string Description { get; set; }
        public bool IsMain { get; set; }
        public ApplicationUser User { get; set; }
        public int UserId { get; set; }
    }
}