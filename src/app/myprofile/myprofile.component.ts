import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-myprofile',
  imports: [CommonModule,DatePipe],
  templateUrl: './myprofile.component.html',
  styleUrl: './myprofile.component.css'
})
export class MyprofileComponent {
profileDetails={
  'firstName':'Boney',
  'city':'Trivandrum',
  'designation':'Senior Software Engineer',
  'dateOfBirth':'13/04/1984',
 // 'dateOfJoining': new Date('17/07/2020')
}
}
