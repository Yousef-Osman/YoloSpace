import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(this.baseUrl + 'users');
  }

  getUser(id:number){
    return this.http.get<User>(this.baseUrl + 'users/' + id);
  }
}

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Authorization' : 'bearer ' + localStorage.getItem('token')
//   })
// };