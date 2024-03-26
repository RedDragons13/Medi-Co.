import { Component } from '@angular/core';


@Component({
  selector: 'app-time',
  templateUrl: './time.component.html', // Corrected path
  styleUrls: ['./time.component.css']
})

export class TimeComponent {
  selectedDate: Date | undefined;
  selectedMonth: string | undefined;
  currentDate = new Date();
  daysInMonth: number[] = [];
  timeSlots = ['11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM'];
  selectedTimeSlot: string | undefined;

  time() {
    this.generateDaysInMonth();
  }

  generateDaysInMonth() {
    const daysInMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
    this.daysInMonth = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  }

  prevMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
    this.generateDaysInMonth();
  }

  nextMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
    this.generateDaysInMonth();
  }

  selectDate(day: number) {
    this.selectedDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day);
    this.selectedMonth = this.selectedDate?.toISOString().substr(0, 7); // Format as YYYY-MM
  }

  selectTimeSlot(slot: string) {
    this.selectedTimeSlot = slot;
  }
}
