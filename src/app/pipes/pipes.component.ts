import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
// message:string="Good Evening All of You ";
// todayDate=new Date();
// date:string="";
 
//cityNames:string[]=["Mumbai ","Pune","Nagpur","Nashik","Ahmednager","Amravati","Nagar","Patna","Panji"]

EmployeeList:any[]=[
{Name:"puja",Salary:40000,Gender:"Female"} ,
{Name:"prashant",Salary:40000,Gender:"Male"},
{Name:"punam",Salary:40000,Gender:"Female"},
{Name:"sagar",Salary:40000,Gender:"Male"},
{Name:"pramod",Salary:40000,Gender:"Male"},
{Name:"payal",Salary:40000,Gender:"Female"}

]
}