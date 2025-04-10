import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  create(createStudentDto: CreateStudentDto) {
    return 'This action adds a new student';
  }

  findAll() {
    return this.prisma.student
      .findMany({
        select: {
          user: true,
          promotion_Student: {
            select: {
              promotion: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      })
      .then((students) => {
        return students.map((student) => {
          const { promotion_Student, user } = student;
          return {
            ...user,
            promotions: promotion_Student.map((ps) => {
              return ps.promotion.name;
            }),
          };
        });
      });
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
