import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginAuthDto } from '../dto/auth-login.dto';
import { RegisterAuthDto } from '../dto/auth-register.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(user: RegisterAuthDto) {
    const { password } = user;
    const plainToHash = await bcrypt.hash(password, 10);

    user = { ...user, password: plainToHash };

    const userCreated = this.userRepo.create(user);
    this.userRepo.save(userCreated);
    return userCreated;
  }

  async login(user: LoginAuthDto) {
    const { email, password } = user;
    const findUser = await this.userRepo.findOne({ where: { email } });

    if (!findUser) throw new HttpException('user_not_found', 404);

    const payload = { email: findUser.email };
    const token = await this.jwtService.sign(payload);

    const data = {
      user: findUser,
      token,
    };

    return data;
  }
}
