import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName: string;

  constructor(private auth: AuthService, private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  loggedIn(){
    this.userName = this.auth.decodedToken?.unique_name;
    return this.auth.loggedIn();

    // const token = localStorage.getItem("token");
    // return !!token;
  }

  logout(){
    localStorage.removeItem("token");
    this.alertify.message("logged out");
  }
}
