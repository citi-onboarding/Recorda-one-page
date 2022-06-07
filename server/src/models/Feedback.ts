import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Feedback {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    PersonName: string

    @Column()
    FeedbackText: string

}