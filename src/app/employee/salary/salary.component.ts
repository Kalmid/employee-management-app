import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from "../sidenav/sidenav.component";
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

interface Ename {
  value: string;
  viewValue: string;
}

interface Dept {
  value: string;
  viewValue: string;
}

@Component({
    selector: 'app-salary',
    standalone: true,
    templateUrl: './salary.component.html',
    styleUrl: './salary.component.less',
    imports: [ReactiveFormsModule, 
      CommonModule, 
      SidenavComponent,
      MatFormFieldModule, 
      MatSelectModule, 
      MatInputModule,
      FormsModule
    ],
})

export class SalaryComponent {

  selectedEname!: string;
  selectedDept!: string;

  salaryForm: FormGroup;
  salList: any[] = [];
  selectedIndex: number = -1;
  isEditMode: boolean = false;
  isSubmitMode: boolean = true;

  enames: Ename[] = [
    {value: 'kalmi', viewValue: 'Kalmi'},
    {value: 'chethana', viewValue: 'Chethana'},
    {value: 'Marage', viewValue: 'Marage'},
  ];
  depts: Dept[] = [
    {value: 'it', viewValue: 'IT'},
    {value: 'hr', viewValue: 'HR'},
    {value: 'security', viewValue: 'Security'},
  ];



  constructor(private formBuilder: FormBuilder) {
    this.salaryForm = this.formBuilder.group({
      Name: [''],
      Department: [''],
      Salary: [''],
      Allowance: [''],
      Total: ['']
    });
  }

  ngOnInit(): void {
    let data = localStorage.getItem('salList');
    this.salList = JSON.parse(data || '[]');
  }

  submit() {
    console.log(this.salaryForm.value);
    if (this.isEditMode) {
      this.updateData();
    } else {
      this.addNewData();
    }
    this.clear();
  }

  edit(i: number) {
    this.salaryForm.patchValue({
      Name: this.salList[i].Name,
      Department: this.salList[i].Department,
      Salary: this.salList[i].Salary,
      Allowance: this.salList[i].Allowance,
      Total: this.salList[i].Total
    });
    this.selectedIndex = i;
    this.isEditMode = true;
    this.isSubmitMode = false;
  }

  updateData() {
    if (this.selectedIndex !== -1) {
      this.salList[this.selectedIndex].Name = this.salaryForm.value.Name;
      this.salList[this.selectedIndex].Department = this.salaryForm.value.Department;
      this.salList[this.selectedIndex].Salary = this.salaryForm.value.Salary;
      this.salList[this.selectedIndex].Allowance = this.salaryForm.value.Allowance;
      this.salList[this.selectedIndex].Total = this.salaryForm.value.Total;
      localStorage.setItem('salList', JSON.stringify(this.salList));
    }
    this.clearEditMode();
  }

  addNewData() {
    this.salList.push(this.salaryForm.value);
    localStorage.setItem('salList', JSON.stringify(this.salList));
  }

  clear() {
    this.salaryForm.reset();
    this.clearEditMode();
  }

  clearEditMode() {
    this.selectedIndex = -1;
    this.isEditMode = false;
    this.isSubmitMode = true;
  }
  
  delete(i: number) {
    this.salList.splice(i, 1);
    localStorage.setItem('empList', JSON.stringify(this.salList));
  }
}
