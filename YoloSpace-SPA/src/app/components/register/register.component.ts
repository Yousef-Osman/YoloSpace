import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formModel: any = {};
  constructor(private auth: AuthService, private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  submitForm() {
    this.auth.register(this.formModel).subscribe(response=>{
      console.log("registration succeded");
      this.alertify.success("registration succeded");
    }, error => {
      // console.log(error);
      this.alertify.error(error.statusText);
    });
  }
}
