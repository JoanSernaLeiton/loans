import { Observable } from 'rxjs';
import { UseCase } from './usecase';
import { AuthResponse, SignInDTO } from '../entities/home.model';
import { AuthRepository } from '../repositories/home.reposiory';

export class SignInUseCase
  implements UseCase<SignInDTO, Observable<AuthResponse>>
{
  constructor(private readonly authRepository: AuthRepository) {}

  execute(authDTO: SignInDTO): Observable<AuthResponse> {
    return this.authRepository.signIn(authDTO);
  }
}
