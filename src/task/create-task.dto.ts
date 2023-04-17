import { IsString } from "class-validator";
import{Status} from "./task.entity"

export class createTaskDto {
    @IsString()
    title:string

    @IsString()
    description: string

    @IsString()
    status: Status
}