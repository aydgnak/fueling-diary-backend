import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { validate, v4 } from 'uuid';
import { Exclude } from 'class-transformer';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Column({ type: 'uuid', unique: true })
  uuid: string;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: Date;

  @BeforeInsert()
  create() {
    if (validate(this.uuid) !== true) {
      this.uuid = v4();
    }

    this.createdAt = new Date();
  }

  @BeforeUpdate()
  update() {
    this.updatedAt = new Date();
  }
}
