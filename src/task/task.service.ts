import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';


@Injectable()
export class TaskService {
  private TASKS=[
    {
      id:1,
      name:'task',
      isDone:false
    }
  ]
  create(createTaskDto: CreateTaskDto) {
    this.TASKS.push({
      id:this.TASKS.length,
      isDone:true,
      name:createTaskDto.name
    })

    return this.TASKS
  }

  findAll() {
    return this.TASKS
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
   const tasks=this.TASKS.find(task => task.id === +id)
   tasks.isDone=!tasks.isDone
   

  return tasks
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
