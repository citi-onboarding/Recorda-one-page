import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Carousel {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string
    
    @Column()
    description: string

    @Column()
    imageLink: string
}