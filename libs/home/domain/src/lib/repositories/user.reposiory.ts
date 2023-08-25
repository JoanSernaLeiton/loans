import { Observable } from 'rxjs';
import { UserModel } from '../entities/user.interface';

export abstract class UserRepository {
  abstract login(email: string,password:string): Observable<UserModel | null>;
}
