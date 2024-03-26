import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LocationComponent } from './location/location.component';
import { SignupComponent } from './signup/signup.component'; // Import the SignupComponent

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'location', component: LocationComponent },
  { path: 'signup', component: SignupComponent }, // Add the route for SignupComponent
  // Other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
