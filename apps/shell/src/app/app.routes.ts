import { loadRemoteModule } from '@nx/angular/mf';
import { Route } from '@angular/router';
import { remoteRoutesEntry } from "@shared/core/ui";

export const appRoutes: Route[] = remoteRoutesEntry(
  [
    {
      path: 'authentication',
      loadChildren: () =>
        loadRemoteModule('authentication', './Module').then(
          (m) => m.RemoteEntryModule
        ),
    },
    {
      path: 'admin',
      loadChildren: () =>
        loadRemoteModule('navbar', './Module').then((m) => m.RemoteEntryModule),
    },
    {
      path: '**',
      redirectTo: 'authentication',
      pathMatch: 'full',
    },
  ]
)
