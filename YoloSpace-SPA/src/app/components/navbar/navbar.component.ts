import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loggedin(){
    const token = localStorage.getItem("token");
    return !!token;
  }

  logout(){
    localStorage.removeItem("token");
  }

}
