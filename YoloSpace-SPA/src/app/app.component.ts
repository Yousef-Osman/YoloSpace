import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'YoloSpace-SPA';
  jwtHelper = new JwtHelperService();

  constructor(private auth: AuthService){ }
  
  ngOnInit():void{
    const token = localStorage.getItem("token");
    if(token){
      this.auth.decodedToken = this.jwtHelper.decodeToken(token);
    }
  }
}
