import { BadRequestException, Body, Controller, Delete, Get, Param, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserDto, userParamsDto } from './dto/user.dto';
import { HttpExceptionFilter } from '../core/filter';
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
    @UseFilters(new HttpExceptionFilter())
    async getUser(@Param() params: userParamsDto): Promise<User> {
        try {

            return await this.userService.getUser(params.email)
        } catch (error) {
            throw new BadRequestException('test')
        }
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async postUser(@Body() user: UserDto): Promise<User> {
        return this.userService.addUser(user)
    }

    @Delete('/:email')
    deleteUser(@Param() params: userParamsDto): User[] {
        return this.userService.deleteUser(params.email)
    }
}


