import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Carousel {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    ProfilePictureLink: string

    @Column()
    PersonName: string

    @Column()
    CardText: string

}