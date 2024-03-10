import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from "../sidenav/sidenav.component";
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-employee',
    standalone: true,
    templateUrl: './employee-form.component.html',
    styleUrl: './employee-form.component.less',
    imports: [CommonModule, ReactiveFormsModule, SidenavComponent, MatButtonModule]
})
export class EmployeeFormComponent {

  empForm: FormGroup;
  empList: any[] = [];
  selectedIndex: number = -1;
  isEditMode: boolean = false;
  isSubmitMode: boolean = true;

  constructor(private formBuilder: FormBuilder) {
    this.empForm = this.formBuilder.group({
      Name: [''],
      Email: [''],
      Address: [''],
      Phone: [''],
      Department: [''],
      Dob: [''],
      Doj: [''],
      Designation: ['']
    });
  }
  ngOnInit(): void {
    let data = localStorage.getItem('empList');
    this.empList = JSON.parse(data || '[]');
  }
  submit() {
    console.log(this.empForm.value);
    if (this.isEditMode) {
      this.updateData();
    } else {
      this.addNewData();
    }
    this.clear();
  }
  edit(i: number) {
    this.empForm.patchValue({
      Name: this.empList[i].Name,
      Email: this.empList[i].Email,
      Address: this.empList[i].Address,
      Phone: this.empList[i].Phone,
      Department: this.empList[i].Department,
      Dob: this.empList[i].Dob,
      Doj: this.empList[i].Doj,
      Designation: this.empList[i].Designation
    });
    this.selectedIndex = i;
    this.isEditMode = true;
    this.isSubmitMode = false;
  }
  updateData() {
    if (this.selectedIndex !== -1) {
      this.empList[this.selectedIndex].Name = this.empForm.value.Name;
      this.empList[this.selectedIndex].Email = this.empForm.value.Email;
      this.empList[this.selectedIndex].Address = this.empForm.value.Address;
      this.empList[this.selectedIndex].Phone = this.empForm.value.Phone;
      this.empList[this.selectedIndex].Department = this.empForm.value.Department;
      this.empList[this.selectedIndex].Dob = this.empForm.value.Dob;
      this.empList[this.selectedIndex].Doj = this.empForm.value.Doj;
      this.empList[this.selectedIndex].Designation = this.empForm.value.Designation;
      localStorage.setItem('empList', JSON.stringify(this.empList));
    }
    this.clearEditMode();
  }
  addNewData() {
    this.empList.push(this.empForm.value);
    localStorage.setItem('empList', JSON.stringify(this.empList));
  }
  clear() {
    this.empForm.reset();
    this.clearEditMode();
  }
  clearEditMode() {
    this.selectedIndex = -1;
    this.isEditMode = false;
    this.isSubmitMode = true;
  }
  delete(i: number) {
    this.empList.splice(i, 1);
    localStorage.setItem('empList', JSON.stringify(this.empList));
  }
}
