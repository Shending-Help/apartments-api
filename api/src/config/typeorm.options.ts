import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { envConstants } from './environment.constants';

export const DatabaseOptions: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    host: configService.get(envConstants.POSTGRESDB.dbHost),
    port: <number>configService.get(envConstants.POSTGRESDB.dbPort),
    username: configService.get(envConstants.POSTGRESDB.dbUserName),
    password: configService.get(envConstants.POSTGRESDB.dbPassword),
    database: configService.get(envConstants.POSTGRESDB.dbName),
    autoLoadEntities: true,
    synchronize: true,
    logging: configService.get('DATABASE_LOGS_ENABLED') === 'true', // enable to log DB running queries
  }),
  inject: [ConfigService],
};
