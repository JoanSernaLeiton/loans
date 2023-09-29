import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'klym-remote-entry',
  templateUrl: './remote-entry.component.html',
  styleUrls: ['./remote-entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoteEntryComponent {}
