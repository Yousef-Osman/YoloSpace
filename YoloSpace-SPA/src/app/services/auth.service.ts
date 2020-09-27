import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginData } from '../interfaces/loginData';
import { map } from 'rxjs/operators';
import { RegisterData } from '../interfaces/registerData';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = "http://localhost:2864/api/auth/";
  jwtHelper = new JwtHelperService();
  decodedToken:any;

  constructor(private http: HttpClient) { }

  login(data: LoginData){
    return this.http.post(this.baseUrl + 'login', data).pipe(
      map((response:any) =>{
        const user = response;
        if(user){
          localStorage.setItem("token", user.token);
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
        }
      }));
  }

  register(data:RegisterData){
    return this.http.post(this.baseUrl + 'register', data);
  }

  loggedIn(){
    const token = localStorage.getItem("token");
    return !this.jwtHelper.isTokenExpired(token);
  }
}
