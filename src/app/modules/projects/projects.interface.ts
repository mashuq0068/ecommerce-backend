export interface ITechnology {
    image: string;
    name: string;
  }
  
  export interface IProject {
    name: string;
    image: string;
    description: string;
    shortDescription: string;
    liveLink: string;
    frontendRepo: string;
    backendRepo?: string;  // Optional field for backend repository link
    technologies?: ITechnology[]; // Default to empty array if not provided
  }
  