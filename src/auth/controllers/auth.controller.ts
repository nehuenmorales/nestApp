import { Controller, Post, Body, Param  } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { threadId } from 'worker_threads';
import { RegisterAuthDto } from '../dto/auth-register.dto';
import { AuthService } from '../service/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService : AuthService){}

    @Post('register')
    registerUser(@Body() newUser : RegisterAuthDto): Promise<User>{
        return this.authService.register(newUser);
    }
}
