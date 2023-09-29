import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AuthRepository,
  AuthResponse,
  SignInDTO, SignUpDTO
} from '@authentication/domain';
import { HttpClient } from '@angular/common/http';
import { env } from "@klym/shared/environment";
import { STORAGE_KEYS, WebStorageService } from "@klym/shared/web-storage";

@Injectable({ providedIn: 'root' })
export class HomeService implements AuthRepository {
  constructor(private readonly httpClient: HttpClient) {
  }

  signIn(authDTO: SignInDTO): Observable<AuthResponse> {
    const url = `/api/auth/signin`;
    return this.httpClient.post<AuthResponse>(`${env.authenticationApiURL}${url}`, authDTO);
  }
  signUp(signUpDTO: SignUpDTO): Observable<AuthResponse> {
    const url = `/api/auth/signup`;
    return this.httpClient.post<AuthResponse>(`${env.authenticationApiURL}${url}`, signUpDTO);
  }

  saveToken(token: string): void {
    WebStorageService.setItem(STORAGE_KEYS.TOKEN,token)
  }
}
