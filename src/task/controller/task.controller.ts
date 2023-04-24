import { Controller, Get, Post, Body, Param, Patch, UseGuards} from '@nestjs/common';
import { task } from '../entities/task.entity';
import { TaskService } from '../service/task.service';
import { updateTaskDto } from '../dto/update-task.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
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
