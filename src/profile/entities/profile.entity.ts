import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Profile{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    location: string;

    @OneToOne(()=> User, (user)=> user.profile)
    @JoinColumn()
    user: User;

}