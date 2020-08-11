import { UsersService } from '../../services/users.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root',
})
export class UserResolverGuard implements Resolve<User> {
  constructor(private usersService: UsersService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> {
    if (route.params && route.params.id) {
      return this.usersService.loadByID(route.params.id);
    }

    return of({
      id: null,
      name: null,
      username: null,
      email: null,
      address: {
        street: null,
        suite: null,
        city: null,
        zipcode: null,
        geo: {
          lat: null,
          lng: null,
        },
      },
      phone: null,
      website: null,
      company: {
        name: null,
        catchPhrase: null,
        bs: null,
      },
    });
  }
}
