import { HouseEntity } from 'src/houses/house.entity';
import {
  ManyToOne,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  Column,
} from 'typeorm';

@Entity()
export class PersonEntity {
  @PrimaryGeneratedColumn()
  personId: number;

  @ManyToOne(() => HouseEntity, (house) => house.people)
  @JoinColumn({ name: 'houseId' })
  houseId: number;

  @Column()
  canCuocCongDan: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  dateOfBirth: string;

  @Column()
  gender: string;

  @Column()
  job: string;

  @Column()
  relationship: string;

  @Column()
  status: string;

  @Column()
  address: string;

  @Column()
  isOwner: boolean;
}
