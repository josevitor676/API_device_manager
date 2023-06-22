import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source"
import { Device } from "../../entities"
import { IReturnDeviceByDate } from "../../interfaces/device.interfaces";
import { AppError } from "../../errors";

const getDeviceByDateService = async (dateQuery: any): Promise<IReturnDeviceByDate> => {

    const deviceRepository: Repository<Device> = AppDataSource.getRepository(Device);
    const dataAtual = new Date();

    const dataInicio = dateQuery.dataInicio;
    const dataFim = dateQuery.dataFim;

    if(dataInicio === undefined || dataFim === undefined) {
        throw new AppError('Error: Query is empty.', 404)
    }

    const deviceDate = deviceRepository.createQueryBuilder('device').
    select(["device"]).
    where("device.dataEntrada ::TIMESTAMP::DATE >= :dataInicio", {dataInicio: dataInicio}).
    andWhere("device.dataSaida <= :dataFim", {dataFim: dataFim}).
    getMany()

    if((await deviceDate).length === 0) {
        throw new AppError('No device found', 404)
    }

    return deviceDate
}

export default getDeviceByDateService

//"dataEntrada" ::TIMESTAMP::DATE = '2023-06-20' AND "dataSaida" = '2023-06-20';

//     const userRepository = dataSource.getRepository(User);
// const users = await userRepository
//          .createQueryBuilder('user')
//          .where('user.createdAt > :startDate', {startDate: new Date(2019, 5, 3)})
//         .andWhere('user.createdAt < :endDate', {endDate: new Date(2022, 5, 3)})
//         .getMany();
