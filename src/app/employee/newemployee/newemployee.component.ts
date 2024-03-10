/*
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newemployee',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './newemployee.component.html',
  styleUrl: './newemployee.component.less'
})
export class NewemployeeComponent {
  newEmpForm: any;

  employee: any;

saveEmp(){
  let emp1 = {ename: 'John Doe', address: 'Flower Rd, Colombia', email: 'john@gmail.com', mobile: '0712345678', department: 'HR', dob: '2001-10-10', doj: '2024-10-12'};
  let emp2 = { name: 'Kalmi', address: 'Flower Rd, Colombia',  email: 'kla@gmail.com', mobile: '0712345678', department: 'IT', dob: '2001-10-10', doj: '2024-10-12' };
  let emp3 = { name: 'Chathuri', address: 'Flower Rd, Colombia',  email: 'chathu@gmail.com', mobile: '0712345678', department: 'HR', dob: '2001-10-10', doj: '2024-10-12' };
  let emp4 = { name: 'Silva', address: 'Flower Rd, Colombia',  email: 'sil@gmail.com', mobile: '0712345678', department: 'Security', dob: '2001-10-10', doj: '2024-10-12' };
  let emp5 = { name: 'Senevirathne', address: 'Flower Rd, Colombia',  email: 'senevi@gmail.com', mobile: '0712345678', department: 'Saled', dob: '2001-10-10', doj: '2024-10-12' };
  let emp6 = { name: 'Sepala', address: 'Flower Rd, Colombia',  email: 'sepala@gmail.com', mobile: '0712345678', department: 'HR', dob: '2001-10-10', doj: '2024-10-12' };

  localStorage.setItem('employee', JSON.stringify(emp1));
  localStorage.setItem('employee', JSON.stringify(emp2));
  localStorage.setItem('employee', JSON.stringify(emp3));
  localStorage.setItem('employee', JSON.stringify(emp4));
  localStorage.setItem('employee', JSON.stringify(emp5));
  localStorage.setItem('employee', JSON.stringify(emp6));

}

loadEmp(){
  let emp1: any = localStorage.getItem('employee');
  this.employee = JSON.parse(emp1);
}


  constructor(public fb: FormBuilder, public router: Router){}

  ngOnInit(): void{
    this.newEmpForm = this.fb.group({
      ename: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      department: ['', Validators.required],
      dob: ['', Validators.required],
      doj: ['', Validators.required]
    });
    //this.fetchEmployees();
  }
/!*

   getEmployees(){
    let filteredEmployees: any[] = [];
    return this.getEmployees;
    }


  onSubmit(){
    if(this.newEmpForm.valid){
      const newemployee = this.newEmpForm.value;
      this.newEmpForm.reset();
      this.newEmpForm.patchValue({ ename:'', address: '', email:'', mobile:'', department:'', dob:'', doj:''});
    }

  } *!/

  saveForm(){
    console.log("Form Saved!");
  }

  onBack(){
    this.router.navigate(['/employee/dashboard']);
  }



}
*/
