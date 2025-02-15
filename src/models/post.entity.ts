import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userId: string;
  @Column('text')
  body: string;
  @CreateDateColumn()
  createdAt: Date;
}
