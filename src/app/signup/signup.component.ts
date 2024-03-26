import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userName: string = '';
  email: string = '';
  phoneNumber: string = '';
  password: string = '';

  constructor() { }

  register(): void {
    // Logic to handle form submission
    console.log('User Name:', this.userName);
    console.log('Email:', this.email);
    console.log('Phone Number:', this.phoneNumber);
    console.log('Password:', this.password);
    // You can add further logic here, like sending the form data to a server
  }
}
