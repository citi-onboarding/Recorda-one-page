import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class FirstSection {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    info1Title: string

    @Column()
    info1Subtitle: string

    @Column()
    info2Title: string

    @Column()
    info2Subtitle: string

    @Column()
    info3Title: string

    @Column()
    info3Subtitle: string

    @Column()
    linkAppImage: string
    
}