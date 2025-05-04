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
