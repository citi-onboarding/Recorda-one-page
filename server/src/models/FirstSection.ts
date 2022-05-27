import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class FirstSection {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    info1: string

    @Column()
    info2: string

    @Column()
    info3: string

    @Column()
    linkAppImage: string
}