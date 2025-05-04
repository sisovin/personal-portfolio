import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProjectDto: CreateProjectDto) {
    return this.prisma.project.create({
      data: createProjectDto,
    });
  }

  findAll(params: { filter?: string; sort?: string }) {
    const { filter, sort } = params;
    let where = {};
    let orderBy = {};

    if (filter) {
      where = {
        OR: [
          { title: { contains: filter, mode: 'insensitive' } },
          { description: { contains: filter, mode: 'insensitive' } },
        ],
      };
    }

    if (sort) {
      const [field, direction] = sort.split(':');
      orderBy = {
        [field]: direction,
      };
    }

    return this.prisma.project.findMany({
      where,
      orderBy,
    });
  }

  findOne(id: number) {
    return this.prisma.project.findUnique({
      where: { id },
    });
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return this.prisma.project.update({
      where: { id },
      data: updateProjectDto,
    });
  }

  remove(id: number) {
    return this.prisma.project.delete({
      where: { id },
    });
  }
}
