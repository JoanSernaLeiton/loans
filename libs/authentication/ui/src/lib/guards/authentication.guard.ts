import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '@authentication/infrastructure';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const isLoadFromShell = state.url === '/authentication';
  const hasToken = authService.token;
  if (isLoadFromShell) {
    return hasToken ? router.createUrlTree(['/home']) : true;
  }
  return true;
};
