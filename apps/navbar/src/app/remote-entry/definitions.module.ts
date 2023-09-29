import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarUiModule, remoteRoutesNavbar } from '@navbar/ui';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarUiModule,
    RouterModule.forChild(remoteRoutesNavbar),
  ],
  providers: [],
})
export class DefinitionsModule {}
