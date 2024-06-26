//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Patients')
export class PatientsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  name: string;

  @Column('integer', { nullable: true })
  age: number;

  @Column('text', { nullable: true })
  sex: string;

  @Column('text', { nullable: true })
  occupation: string;

  @Column('text', { nullable: true })
  natureOfWork: string;

  @Column('text', { nullable: true })
  complianceHistory: string;
}
