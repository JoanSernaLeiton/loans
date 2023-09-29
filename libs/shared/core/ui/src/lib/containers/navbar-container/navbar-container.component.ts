import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CoreFacade } from "@shared/core/facade";

@Component({
  selector: 'klym-navbar-container',
  templateUrl: './navbar-container.component.html',
  styleUrls: ['./navbar-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarContainerComponent {
  userDetail$ = this.coreFacade.userDetail$;
  constructor(private readonly coreFacade: CoreFacade) {}

}
