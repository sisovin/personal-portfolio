export interface Project {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectDetails {
  id: number;
  title: string;
  description: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectCreate {
  title: string;
  description: string;
  content: string;
}

export interface ProjectUpdate {
  id: number;
  title?: string;
  description?: string;
  content?: string;
}
