import { Route } from '@angular/router';
import { ProxyComponent } from '../proxy/proxy.component';
import { RemoteEntryComponent } from './entry.component';
import { SignInComponent, SignUpComponent } from '@authentication/ui';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: ProxyComponent,
    children: [
      {
        path: '',
        component: RemoteEntryComponent,
        children: [
          { path: '', component: SignInComponent },
          { path: 'sign-up', component: SignUpComponent },
        ],
      },
      { path: '**', redirectTo: '',pathMatch: 'full' },
    ],
  },
];
