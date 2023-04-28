import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { updateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  getUsers() {
    return this.userRepo.find();
  }

  getUser(id: number) {
    return this.userRepo.findOne({ where: { id } });
  }

  updateUser(updateUseer: updateUserDto, id: number) {
    return this.userRepo.update(id, updateUseer);
  }
}
