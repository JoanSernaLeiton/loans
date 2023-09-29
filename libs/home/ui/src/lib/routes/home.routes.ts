import { remoteRoutesEntry } from '@shared/core/ui';
import { HomeContainerComponent } from '../containers/home-container/home-container.component';

export const remoteRoutesHome = remoteRoutesEntry([
  {
    path: '',
    component: HomeContainerComponent,
  },
]);
