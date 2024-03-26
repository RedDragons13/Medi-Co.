import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LocationComponent } from './location/location.component';
import { SignupComponent } from './signup/signup.component';
import { TimeComponent } from './time/time.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'location', component: LocationComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'time', component: TimeComponent },
  // Add the route for SignupComponent
 
  // Other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
