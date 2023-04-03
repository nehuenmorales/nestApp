import { Controller, Get } from '@nestjs/common';

@Controller('task')
export class TaskController {

    @Get()
    helloWorld(){
        return "hola mundo"
    }
}
