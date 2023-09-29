import {
  DashboardContainerComponent,
  remoteRoutesEntry,
} from '@shared/core/ui';
import { loadRemoteModule } from '@nx/angular/mf';

export const remoteRoutesNavbar = remoteRoutesEntry([
  {
    path: '',
    component: DashboardContainerComponent,
    children: [
      {
        path: 'loan',
        loadChildren: () =>
          loadRemoteModule('loan', './Module').then((m) => m.RemoteEntryModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          loadRemoteModule('home', './Module').then((m) => m.RemoteEntryModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
]);
