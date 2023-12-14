import { Column, CreateDateColumn, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Column()
  @Generated('uuid')
  uuid: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
