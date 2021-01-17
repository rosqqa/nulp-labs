import { Module } from '@nestjs/common';
import { GameController } from './games.controller';

@Module({
    providers: [],
    controllers: [GameController]
})

export class GameModule {}