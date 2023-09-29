import { remoteRoutesEntry } from '@shared/core/ui';
import { LoanContainerComponent } from '../containers/loan-container/loan-container.component';

export const remoteRoutesLoan = remoteRoutesEntry([
  {
    path: '',
    component: LoanContainerComponent,
  },
]);
