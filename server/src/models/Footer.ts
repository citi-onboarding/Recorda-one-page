import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Footer {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    logo: string

    @Column()
    socialMedia1: string

    @Column()
    socialMedia2: string

    @Column()
    socialMedia3: string

    @Column()
    phone: string

}