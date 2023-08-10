import { Observable } from 'rxjs';
import {UserModel} from "@authentication/domain";

export abstract class AuthRepository {
  abstract login(email: string,password:string): Observable<UserModel | null>;
}
