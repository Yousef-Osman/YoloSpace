import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginData } from '../interfaces/loginData';
import { map } from 'rxjs/operators';
import { RegisterData } from '../interfaces/registerData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = "http://localhost:2864/api/auth/";

  constructor(private http: HttpClient) { }

  login(data: LoginData){
    return this.http.post(this.baseUrl + 'login', data).pipe(
      map((response:any) =>{
        const user = response;
        if(user){
          localStorage.setItem("token", user.token);
        }
      }));
  }

  register(data:RegisterData){
    return this.http.post(this.baseUrl + 'register', data);
  }
}
