import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'klym-loan-container',
  templateUrl: './loan-container.component.html',
  styleUrls: ['./loan-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoanContainerComponent {}
