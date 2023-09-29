import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './containers/dashboard-container/dashboard-container.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarContainerComponent } from './containers/navbar-container/navbar-container.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProxyComponent, RemoteEntryComponent } from './components/routes';
import { SharedCoreFacadeModule } from '@shared/core/facade';

@NgModule({
  imports: [CommonModule, SharedCoreFacadeModule, RouterLink, RouterOutlet],
  declarations: [
    ProxyComponent,
    RemoteEntryComponent,
    NavbarComponent,
    DashboardContainerComponent,
    DashboardComponent,
    NavbarContainerComponent,
  ],
})
export class SharedCoreUiModule {}
