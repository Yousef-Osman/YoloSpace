import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formModel: any = {};
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  submitForm() {
    this.auth.register(this.formModel).subscribe(response=>{
      console.log("registration succeded");
    }, error => {
      console.log(error);
    });
  }
}
