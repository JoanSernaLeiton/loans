import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'klym-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardContainerComponent {}
