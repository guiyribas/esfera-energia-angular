import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { User } from '../users/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private API_URL_USERS = `${environment.API}users`;

  constructor(private http: HttpClient) { }

  // Lista todos os usuários (usuários nao estao categorizados)
  list(): Observable<User[]> {
    return this.http.get<User[]>(this.API_URL_USERS);
  }

  // get
  loadByID(id) {
    return this.http.get<User>(this.API_URL_USERS + `/${id}`).pipe(take(1));
  }

  // Se possui ID, edita os dados (put). Se não, cria um novo (post)
  save(record: User) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  // put
  private update(record: User) {
    return this.http.put(this.API_URL_USERS + `/${record.id}`, record).pipe(take(1));
  }

  // post
  private create(record: User) {
    return this.http.post(this.API_URL_USERS, record).pipe(take(1));
  }
}
