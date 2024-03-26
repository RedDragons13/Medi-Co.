import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LocationComponent } from './location/location.component';
import { SignupComponent } from './signup/signup.component';
import { TimeComponent } from './time/time.component';

@NgModule({
  declarations: [
    AppComponent,
    // Your other components
    LoginComponent,
    LocationComponent,
    SignupComponent,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Import FormsModule here
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

