import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

//services
import { ValuesService } from './services/values.service';
import { AuthService } from './services/auth.service';
import { AlertifyService } from './services/alertify.service';

//components
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    ValuesService,
    AuthService,
    AlertifyService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
// export class AppModule(){}