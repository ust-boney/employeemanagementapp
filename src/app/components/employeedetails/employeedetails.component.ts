import { CommonModule, DatePipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { GreetPipe } from '../../greet.pipe';
import { BonusPipe } from '../../pipes/bonus.pipe';
import { SalutationPipe } from '../../pipes/salutation.pipe';

@Component({
  selector: 'app-employeedetails',
  imports: [NgFor, CommonModule,GreetPipe,DatePipe,SalutationPipe, BonusPipe],
  templateUrl: './employeedetails.component.html',
  styleUrl: './employeedetails.component.css'
})
export class EmployeedetailsComponent {
  today= new Date();
empDetails=[
  {'empNo':'U1234','empName':'Mithun','empDesgination':'software developer','Salary':20000,'isPermanent':true,'dateOfJoining':'17/07/2022','empGender':'Male'},
  {'empNo':'U23443','empName':'Saritha','empDesgination':'software developer','Salary':15000,'isPermanent':true,'dateOfJoining':'17/07/2022','empGender':'Female'},
  {'empNo':'U4564','empName':'Pramod','empDesgination':'Team lead','Salary':30000,'isPermanent':false,'dateOfJoining':'17/07/2022','empGender':'Male'},
  {'empNo':'U1233','empName':'Malvika','empDesgination':'Project Manager','Salary':45000,'isPermanent':true,'dateOfJoining':'17/07/2022','empGender':'Female'},
  {'empNo':'U3465','empName':'Hemanth','empDesgination':'software developer','Salary':9000,'isPermanent':false,'dateOfJoining':'17/07/2022','empGender':'Male'},
  {'empNo':'U3623','empName':'Chris','empDesgination':'software tester','Salary':14000,'isPermanent':true,'dateOfJoining':'17/07/2022','empGender':'Male'}
];

totalEmployees= this.empDetails.length;
tempEmployees= this.empDetails.filter(e=>!e.isPermanent).length;
permanentEmployees= this.empDetails.filter(e=>e.isPermanent).length;
//totalSalary= this.empDetails.reduce((total,emp)=> total)
}
