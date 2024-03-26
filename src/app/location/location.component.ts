import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  selectedLocation: string = ''; // Initialize with an empty string
  departments: string[] = []; // Initialize as an empty array

  showDepartments(location: string): void {
    this.selectedLocation = location;
    // Logic to fetch departments based on the selected location
    // Here, we simulate the department fetching process with a dummy data
    switch (location) {
      case 'lb_nagar':
        this.departments = ['Cardiologist', 'Dermatologist', 'Neurologist'];
        break;
      case 'secundrabad':
        this.departments = ['Pediatrician', 'Orthopedic Surgeon', 'Oncologist'];
        break;
      case 'hitech_city':
        this.departments = ['ENT Specialist', 'Ophthalmologist', 'Urologist'];
        break;
      case 'shamshabad':
        this.departments = ['Gynecologist', 'Endocrinologist', 'Psychiatrist'];
        break;
      default:
        this.departments = [];
        break;
    }
  }
}
