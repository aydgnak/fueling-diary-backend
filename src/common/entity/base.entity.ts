import { BeforeInsert, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { validate, v4 } from 'uuid';
import { Exclude } from 'class-transformer';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Column({ type: 'uuid', unique: true })
  uuid: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  create() {
    if (validate(this.uuid) !== true) {
      this.uuid = v4();
    }
  }
}
