import { Controller,Get } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { UserService } from '../service/user.service';

@Controller('controller')
export class UserController {
    constructor(private userService : UserService){}

    @Get()
    getUsers(): Promise<User[]>{
        return this.userService.getUsers()
    }
}
