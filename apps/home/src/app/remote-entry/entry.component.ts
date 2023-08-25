import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'klym-home-entry',
  templateUrl: './entry.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoteEntryComponent {}
