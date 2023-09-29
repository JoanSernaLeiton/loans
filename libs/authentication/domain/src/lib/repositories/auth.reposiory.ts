import { Observable } from 'rxjs';
import { AuthResponse, SignInDTO, SignUpDTO } from '../entities/auth.model';

export abstract class AuthRepository {
  abstract token: string | undefined | null;

  abstract signIn(authDTO: SignInDTO): Observable<AuthResponse>;

  abstract signUp(authDTO: SignUpDTO): Observable<AuthResponse>;

  abstract saveToken(token: string): void;
}
