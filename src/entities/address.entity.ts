import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('address')
class Address {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'varchar', length: 100})
    endereco: string

    @Column({type: 'varchar', length:10})
    numero: string

    @Column({type: 'text', nullable: true})
    complemento?: string | null | undefined

    @Column({type: 'varchar', length:45})
    cidade: string
}

export {
    Address
}