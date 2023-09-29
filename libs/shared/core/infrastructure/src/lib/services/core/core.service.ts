import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { env } from '@klym/shared/environment';
import { HomeRepository, UserDetailEntity } from '@home/domain';
import { Router } from '@angular/router';
import { STORAGE_KEYS, WebStorageService } from '@klym/shared/web-storage';

@Injectable({ providedIn: 'root' })
export class CoreService implements HomeRepository {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly router: Router
  ) {}

  getUserDetail(): Observable<UserDetailEntity> {
    const url = `/api/auth/user`;
    return this.httpClient.get<UserDetailEntity>(
      `${env.authenticationApiURL}${url}`
    );
  }

  goToAuthentication(): void {
    this.router.navigate(['/']).then(() => {
      WebStorageService.removeItem(STORAGE_KEYS.TOKEN);
    });
  }
}
