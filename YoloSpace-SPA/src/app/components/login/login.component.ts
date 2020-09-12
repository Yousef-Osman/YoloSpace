import { Component, OnInit } from '@angular/core';
import { LoginData } from 'src/app/interfaces/loginData';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel: any = {};
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  submitForm(){
    this.auth.login(this.formModel).subscribe(response=>{
      console.log("loged in successfully");
    },error=>{
      console.log("login failed");
    });
  }
}
