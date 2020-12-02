import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, 
              private route: ActivatedRoute,
              private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.route.data.subscribe(data=> {
      this.user = data['user'];
    });
    // this.loadUser();
  }

  loadUser(){
    let userId = +this.route.snapshot.params['id'];
    console.log(userId);
    this.userService.getUser(userId).subscribe((userData: User)=>{
      this.user = userData;
    }, error=>{
      this.alertify.error(error);
    });
  }
}
