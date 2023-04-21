import { IsString } from "class-validator";

export class updateUserDto {

    @IsString()
    email?: string

    @IsString()
    password: string
}