import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CreateGameDto } from './dto/game.dto'

@Controller('game')
export class GameController {
	@Get()
  	getAll() {}

	@Get(':id')
	getOne(@Param('id') id: string) {}

	@Post()
	createGame(@Body() createGameDto: CreateGameDto) {}
}