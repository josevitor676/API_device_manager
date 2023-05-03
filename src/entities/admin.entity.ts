import { getRounds, hashSync } from 'bcryptjs'
import {Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate} from 'typeorm'


@Entity('admin')
class Admin {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'varchar', length:60})
    nomeLoja: string

    @Column({type: 'varchar', length:100, unique: true})
    email: string

    @Column({type: 'varchar', length:120})
    password: string

    @BeforeInsert()
    @BeforeUpdate()
    hashedPassword() {
        const isEncrypted = getRounds(this.password)
        if(!isEncrypted) {
            this.password = hashSync(this.password, 10)
        }
    }
}


export {
    Admin
}