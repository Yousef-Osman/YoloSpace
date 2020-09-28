import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formModel: any = {};
  constructor(private auth: AuthService, 
              private alertify: AlertifyService, 
              private router: Router) { }

  ngOnInit(): void {
  }

  submitForm() {
    this.auth.register(this.formModel).subscribe(response=>{
      this.router.navigate(['']);
      this.alertify.success("registration succeded");
    }, error => {
      this.alertify.error(error.statusText);
    });
  }

  redirectToLogin(){
    this.router.navigate(['/login']);
  }
}
