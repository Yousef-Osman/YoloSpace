import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private auth: AuthService, 
              private alertify:AlertifyService,
              private router: Router) { }

  ngOnInit(): void {
  }

  submitForm(){
    this.auth.login(this.formModel).subscribe(response=>{
      this.router.navigate(['']);
      this.alertify.success("loged in successfully");
    },error=>{
      this.alertify.error(error.statusText);
    });
  }

  redirectToRegister(){
    this.router.navigate(['/register'])
  }
}
