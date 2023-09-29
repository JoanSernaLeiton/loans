import { Injectable } from '@angular/core';
import * as CoreActions from '@shared/core/infrastructure';
import * as CoreSelectors from '@shared/core/infrastructure';
import { select, Store } from '@ngrx/store';
import { SharedCoreFacadeModule } from './shared-core-facade.module';

@Injectable({ providedIn: SharedCoreFacadeModule })
export class CoreFacade {
  userDetail$ = this.store.pipe(
    select(CoreSelectors.selectUserDetail)
  );

  constructor(private readonly store: Store) {}

  getUserDetail(): void {
    this.store.dispatch(CoreActions.GetUserDetail());
  }
}
