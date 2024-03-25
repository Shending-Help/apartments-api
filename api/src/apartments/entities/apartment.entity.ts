import {
  Column,
  CreateDateColumn,
  Entity,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Apartment {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title: string;

  @Column({
    nullable: true,
  })
  description: string;

  @Column()
  price: number;

  @Column()
  location: string;

  @Column()
  bedrooms: number;

  @Column()
  bathrooms: number;

  @Column()
  size: number; // Size in square meters

  @Column({ default: true })
  available?: boolean; // Indicates whether the apartment is available or not

  @Column({
    nullable: true,
  })
  image?: string;

  @Column({
    name: 'is_deleted',
    default: false,
  })
  isDeleted?: boolean;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public createdAt?: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updatedAt?: Date;
}
