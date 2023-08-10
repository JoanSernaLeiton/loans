import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'supplier',
    loadChildren: () =>
      import('supplier/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'funder',
    loadChildren: () =>
      import('funder/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('authentication/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'debtor',
    loadChildren: () =>
      import('debtor/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
