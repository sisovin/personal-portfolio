# Personal Portfolio

## Overview

This project is a monorepo setup for a personal portfolio website. It includes a backend application built with NestJS and a frontend application built with Next.js. The monorepo is managed using pnpm workspaces and Turborepo.

## Workspace Setup

1. Initialize the monorepo with pnpm workspaces:
   ```sh
   pnpm init
   ```

2. Configure `pnpm-workspace.yaml`:
   ```yaml
   packages:
     - 'packages/*'
     - 'apps/*'
   ```

3. Set up the root `package.json` with shared scripts:
   ```json
   {
     "name": "personal-portfolio",
     "version": "1.0.0",
     "private": true,
     "workspaces": [
       "packages/*",
       "apps/*"
     ],
     "scripts": {
       "build": "turbo run build",
       "dev": "turbo run dev",
       "lint": "turbo run lint",
       "format": "prettier --write .",
       "test": "turbo run test"
     },
     "devDependencies": {
       "eslint": "^7.32.0",
       "prettier": "^2.3.2",
       "turbo": "^1.0.0",
       "typescript": "^4.3.5"
     }
   }
   ```

4. Configure root `tsconfig.json` with base settings:
   ```json
   {
     "compilerOptions": {
       "target": "ESNext",
       "module": "CommonJS",
       "lib": ["ESNext", "DOM"],
       "allowJs": true,
       "skipLibCheck": true,
       "strict": true,
       "forceConsistentCasingInFileNames": true,
       "noEmit": true,
       "esModuleInterop": true,
       "moduleResolution": "node",
       "resolveJsonModule": true,
       "isolatedModules": true,
       "jsx": "react-jsx"
     },
     "include": ["packages/**/*", "apps/**/*"]
   }
   ```

5. Set up Turborepo configuration in `turbo.json`:
   ```json
   {
     "$schema": "https://turborepo.org/schema.json",
     "pipeline": {
       "build": {
         "dependsOn": ["^build"],
         "outputs": ["dist/**"]
       },
       "lint": {
         "outputs": []
       },
       "test": {
         "outputs": []
       },
       "dev": {
         "cache": false
       }
     }
   }
   ```

6. Configure ESLint and Prettier at root level:
   - `.eslintrc.json`:
     ```json
     {
       "root": true,
       "parser": "@typescript-eslint/parser",
       "plugins": ["@typescript-eslint"],
       "extends": [
         "eslint:recommended",
         "plugin:@typescript-eslint/recommended",
         "prettier"
       ],
       "env": {
         "node": true,
         "browser": true,
         "es2021": true
       },
       "rules": {
         "no-unused-vars": "warn",
         "no-console": "warn",
         "@typescript-eslint/no-unused-vars": ["warn"],
         "@typescript-eslint/explicit-function-return-type": "off",
         "@typescript-eslint/no-explicit-any": "off"
       },
       "overrides": [
         {
           "files": ["*.ts", "*.tsx"],
           "rules": {
             "@typescript-eslint/explicit-function-return-type": ["warn"]
           }
         }
       ]
     }
     ```

   - `.prettierrc`:
     ```json
     {
       "semi": true,
       "singleQuote": true,
       "trailingComma": "all",
       "printWidth": 80,
       "tabWidth": 2
     }
     ```

7. Create `.gitignore` with standard patterns:
   ```gitignore
   node_modules
   dist
   .env
   .turbo
   .DS_Store
   ```

## Shared Package (`packages/shared`)

1. Initialize shared package:
   ```sh
   mkdir -p packages/shared
   cd packages/shared
   pnpm init
   ```

2. Set up shared TypeScript types:
   - `user.ts` - User interface and related types
   - `project.ts` - Project interface and related types
   - `blog.ts` - Blog post interface and related types

3. Create API contracts:
   - Auth endpoints and DTOs
   - Project endpoints and DTOs
   - Blog endpoints and DTOs

4. Implement shared utilities:
   - Validation helpers
   - Type guards
   - Common formatters

## Backend (NestJS - `apps/backend`)

### Core Setup

1. Initialize NestJS application:
   ```sh
   mkdir -p apps/backend
   cd apps/backend
   pnpm init
   pnpm add @nestjs/core @nestjs/common @nestjs/platform-express
   pnpm add -D typescript ts-node @types/node
   ```

2. Configure Prisma ORM with PostgreSQL:
   ```sh
   pnpm add @prisma/client
   pnpm add -D prisma
   npx prisma init
   ```

3. Set up database schema in `schema.prisma`:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }

   generator client {
     provider = "prisma-client-js"
   }

   model User {
     id        Int      @id @default(autoincrement())
     email     String   @unique
     password  String
     createdAt DateTime @default(now())
     updatedAt DateTime @updatedAt
   }

   model Project {
     id          Int      @id @default(autoincrement())
     title       String
     description String
     createdAt   DateTime @default(now())
     updatedAt   DateTime @updatedAt
   }

   model Blog {
     id          Int      @id @default(autoincrement())
     title       String
     content     String
     createdAt   DateTime @default(now())
     updatedAt   DateTime @updatedAt
   }
   ```

4. Create initial migrations:
   ```sh
   npx prisma migrate dev --name init
   ```

5. Implement database seed script:
   ```ts
   import { PrismaClient } from '@prisma/client';

   const prisma = new PrismaClient();

   async function main() {
     await prisma.user.create({
       data: {
         email: 'admin@example.com',
         password: 'password',
       },
     });

     await prisma.project.create({
       data: {
         title: 'Sample Project',
         description: 'This is a sample project.',
       },
     });

     await prisma.blog.create({
       data: {
         title: 'Sample Blog Post',
         content: 'This is a sample blog post.',
       },
     });
   }

   main()
     .catch((e) => {
       console.error(e);
       process.exit(1);
     })
     .finally(async () => {
       await prisma.$disconnect();
     });
   ```

6. Configure global pipes and filters:
   ```ts
   import { ValidationPipe } from '@nestjs/common';
   import { NestFactory } from '@nestjs/core';
   import { AppModule } from './app.module';

   async function bootstrap() {
     const app = await NestFactory.create(AppModule);
     app.useGlobalPipes(new ValidationPipe());
     await app.listen(3000);
   }
   bootstrap();
   ```

### Auth Module

1. Implement JWT authentication
2. Set up argon2 for password hashing
3. Create auth guards:
   - JWT guard
   - Roles guard
4. Implement auth controller:
   - Login endpoint
   - Register endpoint
   - Profile endpoint
   - Refresh token endpoint

### Projects Module

1. Create project entity and DTOs
2. Implement CRUD operations:
   - Create project
   - Get all projects
   - Get project by ID
   - Update project
   - Delete project
3. Add project filtering and sorting

### Blog Module

1. Create blog post entity and DTOs
2. Implement CRUD operations for blog posts
3. Add markdown content support
4. Implement blog post categorization

### Users Module

1. Create user profile management
2. Implement password reset flow
3. Add user role management

### Shared Backend Utilities

1. Set up Prisma service
2. Implement custom exceptions
3. Create response interceptors
4. Add request validation decorators

## Frontend (Next.js - `apps/frontend`)

### Core Setup

1. Initialize Next.js 14 app with TypeScript:
   ```sh
   mkdir -p apps/frontend
   cd apps/frontend
   pnpm init
   pnpm add next react react-dom
   pnpm add -D typescript @types/react @types/node
   ```

2. Configure Tailwind CSS with custom theme:
   ```sh
   pnpm add -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. Set up shadcn/ui components
4. Implement dark/light mode toggle
5. Configure NextAuth.js for authentication

### Public Pages

1. Home page (`page.tsx`):
   - Hero section
   - Skills showcase
   - Featured projects
   - Testimonials
2. About page:
   - Personal bio
   - Experience timeline
   - Skills visualization
3. Projects page:
   - Project grid
   - Filtering controls
   - Project details modal
4. Blog page:
   - Article list
   - Category filtering
   - Article detail view
5. Contact page:
   - Contact form
   - Social links
   - Map integration

### Authenticated Routes

1. Dashboard layout
2. Admin dashboard:
   - Project management
   - Blog post management
   - User profile settings

### Components

1. UI components (using shadcn/ui):
   - Custom button variants
   - Cards
   - Forms
   - Dialogs
2. Page sections:
   - Hero section
   - Projects grid
   - Skills chart
3. Icons:
   - Custom SVG icons
   - Social media icons
4. Providers:
   - Theme provider
   - Auth provider

### API Integration

1. Set up API client with axios/fetch
2. Implement auth hooks:
   - useLogin
   - useRegister
   - useLogout
3. Create data fetching hooks:
   - useProjects
   - useBlogPosts
   - useUserProfile

### Assets and Styling

1. Add custom fonts
2. Set up global CSS styles
3. Optimize and add portfolio images
4. Create favicon and social share images

## Deployment Setup

1. Configure Dockerfiles for both frontend and backend
2. Configure production environment variables
3. Implement database backup strategy
4. Set up monitoring and error tracking

## Testing

1. Backend unit tests
2. Backend integration tests
3. Frontend component tests
4. Frontend E2E tests
5. API contract tests

## Documentation

1. API documentation (Swagger/OpenAPI)
2. Project setup guide
3. Contribution guidelines
4. Architecture decision records
