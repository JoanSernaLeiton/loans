import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';
import { PROVIDERS } from "./constants";
import { Auth } from "../auth/entities/auth.entity";

export const databaseProviders: Provider[] = [
  {
    provide: PROVIDERS.DATA_SOURCE,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService): Promise<DataSource> => {
      const connection: DataSourceOptions = {
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        // entities: [AuthEntity],
        synchronize: true, // Esto debería ser 'false' en un entorno de producción
      };
      const dataSource = new DataSource(connection);
      return dataSource.initialize();
    },
  },
];
