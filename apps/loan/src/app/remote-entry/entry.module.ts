import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoanUiModule, remoteRoutesLoan } from '@loan/ui';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoanUiModule,
    RouterModule.forChild(remoteRoutesLoan),
  ],
  providers: [],
})
export class RemoteEntryModule {}
