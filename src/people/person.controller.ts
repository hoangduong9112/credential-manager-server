import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PersonDto } from './dto/PersonDto';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  create(@Body() personDto: PersonDto) {
    return this.personService.create(personDto);
  }

  @Get()
  findAll() {
    return this.personService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.personService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() personDto: PersonDto) {
    return this.personService.update(id, personDto);
  }
}
