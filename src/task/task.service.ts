import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class TaskService {
  constructor(private prisma:PrismaService){}


 async getById(id:any){
    const tasks=await this.prisma.post.findUnique({
      where:{
        id:+id,
      }
    })
    if(!tasks) throw new NotFoundException("Tasks not found")
    return tasks
  }
  
  create(createTaskDto: CreateTaskDto) {
    return this.prisma.post.create({
      data: createTaskDto
    })
  }

  findAll() {
    return this.prisma.post.findMany()
  }

  findOne(id: string) {
    return `This action returns a #${id} task`;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
   const tasks=await this.getById(id)
   return this.prisma.post.update({
    where:{
      id:+(tasks.id)
    },
    data:{
      isDone:!(await tasks).isDone
    }
   })
   
   

  return tasks
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
