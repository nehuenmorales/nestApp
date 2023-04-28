import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './controller/task.controller';
import { task } from './entities/task.entity';
import { TaskService } from './service/task.service';

@Module({
  imports: [TypeOrmModule.forFeature([task])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
