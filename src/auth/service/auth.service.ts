import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginAuthDto } from '../dto/auth-login.dto';
import { RegisterAuthDto } from '../dto/auth-register.dto';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(User) private userRepo : Repository<User>){}


    async register(user : RegisterAuthDto){

    }

    async login(user : LoginAuthDto){

    }

}
