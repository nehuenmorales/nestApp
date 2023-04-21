import { Controller,Get, Patch,Param,Body } from '@nestjs/common';
import { updateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';
import { UserService } from '../service/user.service';

@Controller('user')
export class UserController {
    constructor(private userService : UserService){}

    @Get()
    getUsers(): Promise<User[]>{
        return this.userService.getUsers()
    }

    @Get(":id")
    getUser(@Param() id : number): Promise<User>{
        return this.userService.getUser(id)
    }

    @Patch(":id")
    updateUser(@Body() updateUser : updateUserDto, @Param() id : number):any{
        return this.userService.updateUser(updateUser, id)
    }
}
