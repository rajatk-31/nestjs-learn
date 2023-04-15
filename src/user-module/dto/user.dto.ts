import { IsDefined, IsEmail, IsString } from "class-validator";

export class UserDto {

    @IsString()
    @IsEmail()
    @IsDefined()
    email: string;

    @IsString()
    @IsDefined()
    username: string;
}

export class userParamsDto {

    @IsString()
    @IsEmail()
    @IsDefined()
    email: string;
}