import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Feedback {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    personName: string

    @Column()
    feedbackText: string

}