import { Column, Entity } from 'typeorm';
import { BaseEntity } from '@shared/entity';
import { Exclude } from 'class-transformer';

@Entity()
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 20, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 100 })
  @Exclude()
  password: string;
}
