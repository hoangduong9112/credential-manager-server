import { PersonEntity } from 'src/people/person.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class HouseEntity {
  @PrimaryGeneratedColumn()
  houseId: number;

  @Column()
  contact: string;

  @OneToMany(() => PersonEntity, (personEntity) => personEntity.personId)
  people: PersonEntity[];
}
