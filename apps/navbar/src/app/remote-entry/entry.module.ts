import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarUiModule } from '@navbar/ui';
import { setRemoteDefinitions } from '@nx/angular/mf';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarUiModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          fetch('/assets/module-federation.manifest.local.json')
            .then((res) => res.json())
            .then((definitions) => setRemoteDefinitions(definitions))
            .then(() => import('./definitions.module'))
            .then((m) => m.DefinitionsModule),
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
