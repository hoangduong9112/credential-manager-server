import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HouseController } from './house.controller';
import { HouseEntity } from './house.entity';
import { HouseService } from './house.service';

@Module({
  imports: [TypeOrmModule.forFeature([HouseEntity])],
  controllers: [HouseController],
  providers: [HouseService],
})
export class HouseModule {}
