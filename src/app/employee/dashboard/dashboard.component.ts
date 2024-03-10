import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, SidenavComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.less'
})
export class DashboardComponent {
  newEmployees = ['January: Chnathumi Bandara', 'January: Chathura Perera', 'January: Sunil De Silva'];
  oldEmployees = ['Weerasinghe'];

  newEmployeesSalary = ['Chnathumi Bandara: Rs.30000', 'Chathura Perera: Rs.35000', 'Sunil De Silva: Rs.25000'];
  oldEmployeesSalary = ['Weerasinghe: Rs.45000'];

  eDepartments = [
    { description: 'HR'},
    { description: 'IT'},
    { description: 'Cleaning'},
    { description: 'Sales'},
    { description: 'Security'},
    { description: 'Purchasing'}
  ]

  constructor(public router: Router){}
  onEmployee(){
    this.router.navigate(['/employee/employee-form']);
  }

  onSalary(){
    this.router.navigate(['/employee/sal']);
  }

  onDepartment(){
    this.router.navigate(['/employee/dept']);
  }

}
