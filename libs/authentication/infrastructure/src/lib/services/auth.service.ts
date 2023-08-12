import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AuthDTO, AuthRepository, AuthResponse } from '@authentication/domain';

@Injectable({ providedIn: 'root' })
export class AuthService extends AuthRepository {
  login(authDTO: AuthDTO): Observable<AuthResponse> {
    // Simulate API call with a delay
    console.log({ authDTO });
    return of({ token: 'mocked-token' }).pipe(delay(5000));
  }
}
