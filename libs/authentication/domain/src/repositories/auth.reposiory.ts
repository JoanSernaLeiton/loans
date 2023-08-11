import { Observable } from 'rxjs';
import {AuthDTO, AuthResponse} from "../entities/auth.model";

export abstract class AuthRepository {
  abstract login(authDTO:AuthDTO): Observable<AuthResponse>;
}
