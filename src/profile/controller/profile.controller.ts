import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ProfileService } from '../service/profile.service';

@Controller('profile')
export class ProfileController {
    constructor(private profileService : ProfileService){}

    @Get()
    getAll(){
        return this.profileService.getAllProfile()
    }


    @Get(':id')
    getById(@Param() id : number){
        return this.profileService.getProfileById(id)
    }


    @Post()
    create(@Body() objet : any){
        return this.profileService.create(objet)
    }

    @Put(':id')
    update(@Param() id : number, @Body() objet : any){
        return this.profileService.update(id, objet);
    }
}
