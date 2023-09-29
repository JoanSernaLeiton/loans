import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFacadeModule } from '@home/facade';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SharedCoreUiModule } from '@shared/core/ui';
import { HomeContainerComponent } from './containers/home-container/home-container.component';

@NgModule({
  imports: [
    CommonModule,
    HomeFacadeModule,
    RouterLink,
    RouterOutlet,
    SharedCoreUiModule,
  ],
  declarations: [HomeContainerComponent],
})
export class HomeUiModule {}
