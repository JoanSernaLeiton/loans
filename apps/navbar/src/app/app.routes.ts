import { Route } from '@angular/router';
import { setRemoteDefinitions } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      fetch('/assets/module-federation.manifest.local.json')
        .then((res) => res.json())
        .then((definitions) => setRemoteDefinitions(definitions))
        .then(() => import('./remote-entry/entry.module'))
        .then((m) => m.RemoteEntryModule),
  },
];
