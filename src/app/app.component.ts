
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactusComponent } from './components/contactus/contactus.component';
import { EmployeedetailsComponent } from './components/employeedetails/employeedetails.component';
import { MyprofileComponent } from './myprofile/myprofile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EmployeedetailsComponent,ContactusComponent,MyprofileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employeemanagementapp';
}
