import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createTaskDto } from './create-task.dto';
import { task } from './task.entity';

@Injectable()
export class TaskService {


    constructor(
        @InjectRepository(task) private userRepo : Repository<task>
    ){}

    getTasks(){
        return this.userRepo.find();
    }


    createTask(newTask: createTaskDto){
        const task = this.userRepo.create(newTask)
        return this.userRepo.save(task);
    }

    getOneTask(id : number){
        return this.userRepo.findOne({where:{
            id
        }})
    }

}
