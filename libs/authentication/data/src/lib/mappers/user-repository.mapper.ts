import {Mapper} from "./mapper";
import {UserEntity} from "../entities/user-entity";
import {UserModel} from "@authentication/domain";


export class UserImplementationRepositoryMapper extends Mapper<UserEntity, UserModel> {
  mapFrom(param: UserEntity): UserModel {
    return {
      id: param.id,
      email: '',
      password: ''
    };
  }

  mapTo(param: UserModel): UserEntity {
    return {
      id: param.id,
      userName: '',
      phoneNumber: '',
      userPicture: '',
      activationStatus: true,
      name: ''
    }
  }
}
