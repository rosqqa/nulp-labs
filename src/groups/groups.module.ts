  import { Module } from '@nestjs/common';
import { GroupController } from './groups.controller';

@Module({
  controllers: [GroupController]
})
export class GroupModule {}