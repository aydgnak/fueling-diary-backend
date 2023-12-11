import { BeforeInsert, BeforeUpdate, Column, PrimaryGeneratedColumn } from 'typeorm';
import { validate, v4 } from 'uuid';
import { Exclude } from 'class-transformer';
import { DateTime } from 'luxon';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;

  @Column({ type: 'uuid', unique: true })
  uuid: string;

  @Column({ type: 'varchar', length: 50 })
  createdAt: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  updatedAt: string;

  @BeforeInsert()
  private create() {
    if (validate(this.uuid) !== true) {
      this.uuid = v4();
    }

    this.createdAt = DateTime.utc().toISO();
  }

  @BeforeUpdate()
  private update() {
    this.updatedAt = DateTime.utc().toISO();
  }
}
