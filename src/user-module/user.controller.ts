import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserDto, userParamsDto } from './dto/user.dto';
import { User } from './interface/user';
import { UserService } from './user.service';


@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    getUsers(): User[] {
        return this.userService.getUsers()
    }

    @Get('/:email')
    getUser(@Param() params: userParamsDto): User {
        return this.userService.getUser(params.email)
    }

    @Post()
    @UsePipes(new ValidationPipe())
    postUser(@Body() user: UserDto): User {
        return this.userService.addUser(user)
    }

    @Delete('/:email')
    deleteUser(@Param() params: userParamsDto): User[] {
        return this.userService.deleteUser(params.email)
    }
}


