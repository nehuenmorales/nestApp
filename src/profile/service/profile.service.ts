import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { Profile } from '../entities/profile.entity';

@Injectable()
export class ProfileService {
    constructor  (@InjectRepository(Profile) private profileRepo : Repository<Profile>,
    @InjectRepository(User) private userRepo : Repository<User>){}

    async getAllProfile(){
        return await this.profileRepo.find();
    }

    async getProfileById(id: number){
        return await this.profileRepo.find({where: {id}});
    }

    async create(objet : any){
        const user = await this.userRepo.find({where:{id: objet.idUser}})
        const newProfile =  await this.profileRepo.create(objet);
        return await this.profileRepo.save(newProfile);
    }

    async update(id: number, objet: any ){
        const existProfile = await this.profileRepo.find({where:{id}}) 
        if(!existProfile){throw new HttpException("this profile does not exist", 404)}
        const updateProfile = Object.assign(existProfile, objet);

        return this.profileRepo.save(updateProfile);
    }
}
