import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ComponentAComponent } from './components/component-a/component-a.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NavbarComponent, ComponentAComponent],
  exports: [NavbarComponent],
})
export class HomeUiModule {}
