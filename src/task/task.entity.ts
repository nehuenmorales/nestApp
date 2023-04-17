import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

export enum Status{
    PENDING = 'PENDING',
    IN_PROGRES = 'IN_PROGRES',
    DONE = 'DONE'
}

@Entity()
export class task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    status: Status
}