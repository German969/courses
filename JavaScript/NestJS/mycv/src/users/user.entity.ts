import { Report } from '../reports/report.entity';
import { AfterInsert, AfterUpdate, AfterRemove, Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  admin: boolean;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

  @AfterInsert()
  logInsert() {
    console.log('Inserted User:', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated User:', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed User:', this.id);
  }
}