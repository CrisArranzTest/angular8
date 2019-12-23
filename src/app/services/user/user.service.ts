import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _rootUrl: string = 'https://jsonplaceholder.typicode.com/users';

  private _users: IUser[];

  constructor(private http: HttpClient) { }

  getUsers(): IUser[]{
    return this._users;
  }

  getUserById(id: number):IUser{
    return this._users.filter(user => user.id === id)[0];
  }

  getUsersViaREST(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this._rootUrl);
  }
  getUserByIdViaREST(id: number): Observable<IUser[]>{
    return this.http.get<IUser[]>(`${this._rootUrl}/${id}`);
  }
}
