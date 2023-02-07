import { PersonDto } from 'src/people/dto/PersonDto';

export interface HouseDto {
  houseId: number;
  ownerId: number;
  people: PersonDto[];
  email: string;
}
