import { Component, OnInit } from '@angular/core';
import { LoginData } from 'src/app/interfaces/loginData';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel: any = {};
  constructor(private auth: AuthService, private alertify:AlertifyService) { }

  ngOnInit(): void {
  }

  submitForm(){
    this.auth.login(this.formModel).subscribe(response=>{
      // console.log("loged in successfully");
      this.alertify.success("loged in successfully");
    },error=>{
      // console.log("login failed");
      this.alertify.error(error.statusText);
    });
  }
}
