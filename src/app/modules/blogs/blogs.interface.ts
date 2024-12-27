export interface IBlog {
    title: string; // Blog title
    description: string; // Blog content or summary
    image: string; // Blog image URL
    author?: string; // Optional: Blog author
    tags?: string[]; // Optional: Tags for the blog
    publishedDate?: Date; // Optional: Blog publication date
  }
  