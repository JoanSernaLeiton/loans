import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'klym-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContainerComponent {}
