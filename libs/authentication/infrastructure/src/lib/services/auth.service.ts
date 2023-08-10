import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from "@authentication/domain";
import {UserRepository} from "@authentication/data";

@Injectable({ providedIn: 'root' })
export class UserService implements UserRepository {

  login(email: string,password:string): Observable<User | null> {
    return of({
      id: '3',
      email: 'joan.serna@klym.com',
      password: 'klym'
    })
  }
}
