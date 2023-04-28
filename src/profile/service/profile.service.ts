import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from '../entities/profile.entity';

@Injectable()
export class ProfileService {
    constructor  (@InjectRepository(Profile) private profileRepo : Repository<Profile>){}

    getAllProfile(){
        return this.profileRepo.find()
    }
}
