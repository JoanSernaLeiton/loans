import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeUiModule, remoteRoutesHome } from '@home/ui';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeUiModule,
    RouterModule.forChild(remoteRoutesHome),
  ],
  providers: [],
})
export class RemoteEntryModule {}
