import { PersonEntity } from 'src/people/person.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonDto } from './dto/PersonDto';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(PersonEntity)
    private personRepository: Repository<PersonEntity>,
  ) {}

  async create(personDto: PersonDto) {
    const person = this.personRepository.create(personDto);
    await this.personRepository.save(person);
    return person;
  }

  async findAll() {
    return await this.personRepository.find();
  }

  async findOne(id: number) {
    return await this.personRepository.findOne({ where: { personId: id } });
  }

  async update(id: number, personDto: PersonDto) {
    await this.personRepository.update({ personId: id }, personDto);
    return await this.personRepository.findOne({ where: { personId: id } });
  }
}
