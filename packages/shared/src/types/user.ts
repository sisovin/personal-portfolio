export interface User {
  id: number;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile {
  id: number;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum Role {
  Admin = 'admin',
  User = 'user',
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserRegistration {
  email: string;
  password: string;
  name: string;
}
