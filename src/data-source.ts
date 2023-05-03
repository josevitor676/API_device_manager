import 'dotenv/config'
import 'reflect-metadata'
import {DataSource, DataSourceOptions} from 'typeorm'
import path from 'path'



const dataSourceConfig = (): DataSourceOptions => {

    const migrationsPath: string = path.join(__dirname, './migrations/**.{js,ts}')
    const entitiesPath: string = path.join(__dirname, './entities/**.{js,ts}')

    const dbUrl: string | null = process.env.DATABASE_URL!

    if(!dbUrl){
        throw new Error('Missing Env var DATABASE_URL')
    }

    const nodeEnv: string | null = process.env.NODE_ENV!

    if(nodeEnv === 'teste') {
        return {
            type: "sqlite",
            database: ":memory:",
            synchronize: true,
            entities: [entitiesPath]
        }
    }


    return {
        type: "postgres",
        url: dbUrl,
        logging: true,
        synchronize: false,
        entities: [entitiesPath],
        migrations: [migrationsPath]
    }

}

const AppDataSource = new DataSource(dataSourceConfig())

export {
    AppDataSource
}