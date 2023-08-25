import { loadRemoteModule } from '@nx/angular/mf';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'authentication',
    loadChildren: () => loadRemoteModule('authentication','./Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'home',
    loadChildren: () => loadRemoteModule('home','./Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full'
  },
];
