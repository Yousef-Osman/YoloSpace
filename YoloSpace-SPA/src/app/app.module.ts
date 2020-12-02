//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { JwtModule } from '@auth0/angular-jwt';

//services
import { AuthService } from './services/auth.service';
import { AlertifyService } from './services/alertify.service';

//components
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MemberListComponent } from './components/members/member-list/member-list.component';
import { MemberCardComponent } from './components/members/member-card/member-card.component';
import { MemberDetailsComponent } from './components/members/member-details/member-details.component';

//resolvers
import { MemberDetailsResolver } from './resolvers/member-details.resolver';

//liberaries
// import {TimeAgoPipe} from 'time-ago-pipe';

export function tokenGetter(){
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    MessagesComponent,
    MemberListComponent,
    MemberCardComponent,
    MemberDetailsComponent,
    // TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:2864'],
        disallowedRoutes: ['localhost:2864/api/auth']
      }
    }),
    TabsModule.forRoot()
  ],
  providers: [
    AuthService,
    AlertifyService,
    MemberDetailsResolver
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }