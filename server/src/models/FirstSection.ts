import { Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity()
export class FirstSection {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    info1: String

    @Column()
    info2: String

    @Column()
    info3: String

    @Column()
    linkAppImage: String
}