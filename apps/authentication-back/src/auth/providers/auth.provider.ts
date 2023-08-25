import { DataSource } from "typeorm";
import { Auth } from "../entities/auth.entity";
import { PROVIDERS } from "../../database/constants";

export const authProviders = [
  {
    provide: PROVIDERS.AUTH_PROVIDER,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Auth),
    inject: [PROVIDERS.DATA_SOURCE],
  },
];
