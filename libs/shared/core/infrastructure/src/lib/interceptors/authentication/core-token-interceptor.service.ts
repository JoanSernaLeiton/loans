import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { STORAGE_KEYS, WebStorageService } from '@klym/shared/web-storage';

@Injectable({ providedIn: 'root' })
export class CoreTokenInterceptorService implements HttpInterceptor {

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = WebStorageService.getItem(STORAGE_KEYS.TOKEN);
    let request = req;
    if (token) {
      request = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(request);
  }
}
