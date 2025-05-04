export interface BlogPost {
  id: number;
  title: string;
  content: string;
  authorId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogPostDetails {
  id: number;
  title: string;
  content: string;
  authorId: number;
  authorName: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogPostCreate {
  title: string;
  content: string;
  authorId: number;
}

export interface BlogPostUpdate {
  id: number;
  title?: string;
  content?: string;
}
