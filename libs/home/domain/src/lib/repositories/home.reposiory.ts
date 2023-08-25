import { Observable } from 'rxjs';

export abstract class HomeRepository {
  abstract getUserDetail(): Observable<unknown>;
}
