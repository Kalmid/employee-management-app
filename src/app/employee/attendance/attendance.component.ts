import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SidenavComponent, MatButtonModule, DatePipe],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.less'
})
export class AttendanceComponent {
  attForm: FormGroup;
  attList: any[] = [];
  selectedIndex: number = -1;
  isEditMode: boolean = false;
  isSubmitMode: boolean = true;

  constructor(private formBuilder: FormBuilder) {
    this.attForm = this.formBuilder.group({
      Name: [''],
      Phone: [''],
      AttendanceDate: [''],
      InTime: [''],
      OutTime: [''],
      IsFullDay: ['']
    });
  }
  ngOnInit(): void {
    let data = localStorage.getItem('attList');
    this.attList = JSON.parse(data || '[]');
  }
  submit() {
    console.log(this.attForm.value);
    if (this.isEditMode) {
      this.updateData();
    } else {
      this.addNewData();
    }
    this.clear();
  }
  edit(i: number) {
    this.attForm.patchValue({
      Name: this.attList[i].Name,
      Phone: this.attList[i].Phone,
      AttendanceDate: this.attList[i].AttendanceDate,
      InTime: this.attList[i].InTime,
      OutTime: this.attList[i].OutTime,
      IsFullDay: this.attList[i].IsFullDay
    });
    this.selectedIndex = i;
    this.isEditMode = true;
    this.isSubmitMode = false;
  }
  updateData() {
    if (this.selectedIndex !== -1) {
      this.attList[this.selectedIndex].Name = this.attForm.value.Name;
      this.attList[this.selectedIndex].Phone = this.attForm.value.Phone;
      this.attList[this.selectedIndex].AttendanceDate = this.attForm.value.AttendanceDate;
      this.attList[this.selectedIndex].InTime = this.attForm.value.InTime;
      this.attList[this.selectedIndex].OutTime = this.attForm.value.OutTime;
      this.attList[this.selectedIndex].IsFullDay = this.attForm.value.IsFullDay;
      localStorage.setItem('attList', JSON.stringify(this.attList));
    }
    this.clearEditMode();
  }
  addNewData() {
    this.attList.push(this.attForm.value);
    localStorage.setItem('attList', JSON.stringify(this.attList));
  }
  clear() {
    this.attForm.reset();
    this.clearEditMode();
  }
  clearEditMode() {
    this.selectedIndex = -1;
    this.isEditMode = false;
    this.isSubmitMode = true;
  }
  delete(i: number) {
    this.attList.splice(i, 1);
    localStorage.setItem('attList', JSON.stringify(this.attList));
  }
}