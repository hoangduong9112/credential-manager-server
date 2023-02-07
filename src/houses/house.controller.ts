import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { HouseDto } from './dto/houseDto';
import { HouseService } from './house.service';

@Controller('house')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Post()
  create(@Body() houseDto: HouseDto) {
    return this.houseService.create(houseDto);
  }

  @Get()
  findAll() {
    return this.houseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.houseService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() houseDto: HouseDto) {
    return this.houseService.update(id, houseDto);
  }
}
