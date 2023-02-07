import { HouseEntity } from 'src/houses/house.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HouseDto } from './dto/houseDto';
import { Repository } from 'typeorm';

@Injectable()
export class HouseService {
  constructor(
    @InjectRepository(HouseEntity)
    private houseRepository: Repository<HouseEntity>,
  ) {}

  async create(houseDto: HouseDto) {
    const house = this.houseRepository.create(houseDto);
    await this.houseRepository.save(house);
    return house;
  }

  async findAll() {
    return await this.houseRepository.find();
  }

  async findOne(id: number) {
    return await this.houseRepository.findOne({ where: { houseId: id } });
  }

  async update(id: number, houseDto: HouseDto) {
    await this.houseRepository.update({ houseId: id }, houseDto);
    return await this.houseRepository.findOne({ where: { houseId: id } });
  }
}
