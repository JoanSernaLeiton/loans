import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AuthEntity } from "@authentication/domain";

@Entity()
export class Auth implements AuthEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
    unique:true
  })
  email: string;

  @Column()
  password: string;

  @Column({
    nullable:true
  })
  name: string;

  @Column({
    nullable:true
  })
  lastName: string;

  @Column({
    default: true
  })
  status: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
