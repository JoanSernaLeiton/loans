import { NgModule } from '@angular/core';
import { LoanContainerComponent } from './containers/loan-container/loan-container.component';
import { SharedCoreUiModule } from '@shared/core/ui';
import { AddLoanComponent } from './add-loan/components/add-loan/add-loan.component';
import { AddLoanContainerComponent } from './add-loan/containers/add-loan-container/add-loan-container.component';

@NgModule({
  imports: [SharedCoreUiModule],
  declarations: [
    LoanContainerComponent,
    AddLoanComponent,
    AddLoanContainerComponent,
  ],
})
export class LoanUiModule {}
