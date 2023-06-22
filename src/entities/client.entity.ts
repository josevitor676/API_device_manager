import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, JoinColumn, OneToMany} from 'typeorm'
import { Address } from './address.entity'
import { Device } from './device.entity'

@Entity('client')
class Client {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'varchar', length: 60})
    nome: string

    @Column({type: 'varchar', length:14})
    telefone: string

    @Column({type: 'varchar', length:11})
    cpf: string

    @CreateDateColumn()
    createdAt: Date | string

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address;

    @OneToMany(() => Device, device => device.cliente)
    devices: Device[];
}

export {
    Client
}