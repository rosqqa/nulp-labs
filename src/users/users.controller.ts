import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CreateUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
    
    @Get()
    getAll() {}

    @Get(':id')
    getOne(@Param('id') id: string) {}

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {}
}