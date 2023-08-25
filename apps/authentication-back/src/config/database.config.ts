// src/config/database.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Auth } from "../auth/entities/auth.entity";

export const databaseConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: +configService.get<number>('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_DATABASE'),
  // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  entities: [Auth],
  synchronize: true, // Esto debería ser 'false' en un entorno de producción
});
