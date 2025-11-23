export interface Experience {
  year: string;
  isPresent?: boolean;
  role: string;
  company: string;
  companyUrl: string;
}

export interface Education {
  year: string;
  course: string;
  institution: string;
}

export interface Project {
  name: string;
  description: string;
  language: string;
  linkUrl: string;
}