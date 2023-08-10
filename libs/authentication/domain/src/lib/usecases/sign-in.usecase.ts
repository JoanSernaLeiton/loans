import { Observable } from 'rxjs';
import { User } from '../entities/user.interface';

export interface SignInUseCase {
  execute(email: string, password: string): Observable<User | null>;
}
