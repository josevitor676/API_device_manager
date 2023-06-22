import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, AfterUpdate, ManyToOne, AfterLoad} from 'typeorm'
import { Client } from './client.entity'

@Entity('device')
class Device {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({type: 'varchar', length:35})
    modelo: string

    @Column({type: 'varchar', length: 35})
    marca: string

    @Column({type: 'varchar', length:150})
    defeito: string

    @Column({type: 'varchar', length: 10})
    preco: string

    @Column({type: 'boolean', default: false})
    completed: boolean

    @Column({type: 'date', nullable: true})
    dataSaida?: Date | string | null

    @CreateDateColumn()
    dataEntrada: Date | string

    @ManyToOne(() => Client, client => client.devices)
    cliente: Client;

    // @AfterUpdate()
    // @AfterLoad()
    // deviceIsReady() {
    //     if(this.completed === true) {
    //         this.dataSaida = new Date()
    //     }
    // }

    
}

export {Device}