import { Observable } from 'rxjs';
import { UseCase } from './usecase';
import { AuthDTO, AuthResponse } from '../entities/auth.model';
import { AuthRepository } from '../repositories/auth.reposiory';

export class SignInUseCase
  implements UseCase<AuthDTO, Observable<AuthResponse>>
{
  constructor(private readonly authRepository: AuthRepository) {}

  execute(authDTO: AuthDTO): Observable<AuthResponse> {
    return this.authRepository.login(authDTO);
  }
}
