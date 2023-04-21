import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TaskController } from './task/controller/task.controller';
import { TaskModule } from './task/task.module';
import { task } from './task/entities/task.entity';
import { TaskService } from './task/service/task.service';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
      ConfigModule.forRoot(),
      TypeOrmModule.forRootAsync({
        imports:[ConfigModule],
        useFactory: async (configService : ConfigService) =>({
          type: 'postgres',
          host: 'localhost',
          port: configService.get<number>('DB_PORT'),
          username:  configService.get<string>('DB_USER'),
          password: configService.get<string>('DB_PASSWORD'),
          database:  configService.get<string>('DB_NAME'),
          // entities: [__dirname + '/**/**/*.entity{.ts,.js}'],
          entities: [task, User],
          synchronize: true,
          retryDelay: 3000,
          retryAttempts:10
        }),
      inject: [ConfigService]
    }),TypeOrmModule.forFeature([task]),
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TaskModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}