import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

getUsers(): Observable<User[]>{
  return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
}

}
