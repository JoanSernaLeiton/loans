import { Injectable } from '@angular/core';
import * as HomeActions from '@home/infrastructure';
import { select, Store } from '@ngrx/store';
import { HomeFacadeModule } from './home-facade.module';
import { selectUserDetail } from "@home/infrastructure";

@Injectable({ providedIn: HomeFacadeModule })
export class HomeFacade {
  userDetail$ = this.store.pipe(
    select(selectUserDetail)
  )
  constructor(private readonly store: Store) {}

  getUserDetail(): void {
    this.store.dispatch(HomeActions.GetUserDetail());
  }
}
