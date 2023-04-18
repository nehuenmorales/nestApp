import { Controller, Get, Post, Body, Param, Patch} from '@nestjs/common';
import { task } from './task.entity';
import { TaskService } from './task.service';
import { updateTaskDto } from './update-task.dto';

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

    @Get(":id")
    getOneTask(@Param() id : number){
        return this.taskService.getOneTask(id)
    }

    @Patch(":id")
    updateTask(@Body() updateTask : updateTaskDto, @Param() id : number){
        return this.taskService.updateTask(id , updateTask);
    }
}
