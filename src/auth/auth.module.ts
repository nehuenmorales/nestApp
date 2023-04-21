import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './service/auth.service';
import { JwtModule } from '@nestjs/jwt/dist';
import { jwtConstants } from 'src/jwtConstants';



@Module({
   imports:[
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '5h' },
    }),
   ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
