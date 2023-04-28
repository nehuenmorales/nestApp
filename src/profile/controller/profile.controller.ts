import { Controller, Get } from '@nestjs/common';
import { ProfileService } from '../service/profile.service';

@Controller('profile')
export class ProfileController {
    constructor(private profileService : ProfileService){}

    @Get()
    getAll(){
        return this.profileService.getAllProfile()
    }
}
