import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CoreFacade } from "@shared/core/facade";

@Component({
  selector: 'klym-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardContainerComponent implements OnInit {
  constructor(private readonly coreFacade: CoreFacade) {}
  ngOnInit(): void {
    this.coreFacade.getUserDetail();
  }
}
