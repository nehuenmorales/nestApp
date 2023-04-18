import { Controller, Get, Post, Body, Param} from '@nestjs/common';
import { task } from './task.entity';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {

    constructor(private taskService : TaskService){}

    @Get()
    getTasks(): Promise<task[]>{
        return this.taskService.getTasks();
    }

    @Post()
    createTask(@Body() newTask : any ): Promise<task>{
        return this.taskService.createTask(newTask);
    }

    @Get("id")
    getOneTask(@Param() id : number){
        return this.taskService.getOneTask(id)
    }
}
