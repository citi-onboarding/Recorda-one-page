import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Feedback {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    ProfilePictureLink: string

    @Column()
    PersonName: string

    @Column()
    Feedback: string



}