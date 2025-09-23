
export interface Project {
  title: string;
  description: string;
  images: string[];
  githubUrl: string;
}

export interface Experience {
  date: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string[];
}