import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from '../entities/profile.entity';

@Injectable()
export class ProfileService {
    constructor  (@InjectRepository(Profile) private profileRepo : Repository<Profile>){}

    async getAllProfile(){
        return await this.profileRepo.find()
    }

    async getProfileById(id: number){
        return await this.profileRepo.find({where: {id}})
    }

    async create(objet : any){
        const newProfile =  await this.profileRepo.create(objet)
        return await this.profileRepo.save(newProfile)
    }
}
