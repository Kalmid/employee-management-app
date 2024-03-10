import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-emplist',
    standalone: true,
    templateUrl: './emplist.component.html',
    styleUrl: './emplist.component.less',
    imports: [SidenavComponent, CommonModule]
})
export class EmplistComponent implements OnInit{

  employeeForm: any;
  employeeObj: EmployeeObj;
  searchText: string;
  employeeArr : EmployeeObj[] = [];

  constructor(public fb: FormBuilder){
    this.employeeObj = new EmployeeObj();
    this.searchText = '';

  }
  ngOnInit(): void {
    
  }

  onSave(){
    this.employeeArr.push(this.employeeObj);
  }

  getAllEmp(){

  }

}

export class EmployeeObj{
  ename: string;
  email: string;
  department: string;
  mobile: string;
  dob: string;
  doj: string;

  constructor(){
    this.ename = "";
    this.email = "";
    this.department = "";
    this.mobile = "";
    this.dob = "";
    this.doj = "";
  }

}
