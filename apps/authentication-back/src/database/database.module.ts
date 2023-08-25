import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";
import { databaseConfig } from "../config/database.config";

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: databaseConfig,
    })
  ],
  providers: [
  ],
  exports: [
  ],
})
export class DatabaseModule {}
