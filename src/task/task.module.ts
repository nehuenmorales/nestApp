import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './task.controller';
import { task } from './task.entity';
import { TaskService } from './task.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([task])
  ],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}
