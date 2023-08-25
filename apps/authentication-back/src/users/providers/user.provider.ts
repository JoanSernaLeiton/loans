import { DataSource } from "typeorm";
import { PROVIDERS } from "../../database/constants";
import { UserEntity } from "../entities/user.entity";

export const userProviders = [
  {
    provide: PROVIDERS.USER_PROVIDER,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
    inject: [PROVIDERS.DATA_SOURCE],
  },
];
