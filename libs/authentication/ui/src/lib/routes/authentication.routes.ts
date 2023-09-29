import { SignInComponent } from '../components/sign-in/sign-in.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { remoteRoutesEntry } from '@shared/core/ui';

export const remoteRoutes = remoteRoutesEntry([
  { path: '', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
]);
