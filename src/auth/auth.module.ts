import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './service/auth.service';



@Module({
   imports:[
    TypeOrmModule.forFeature([User]),
   ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
