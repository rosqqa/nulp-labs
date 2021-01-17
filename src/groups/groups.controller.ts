import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CreateGroupDto } from './dto/group.dto';

@Controller('group')
export class GroupController {
    @Get()
  	getAll() {}

	@Get(':id')
	getOne(@Param('id') id: string) {}

	@Post()
	createGroup(@Body() createGroupDto: CreateGroupDto) {}
}