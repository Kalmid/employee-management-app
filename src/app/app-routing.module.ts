import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './employee/login/login.component';
import { SidenavComponent } from './employee/sidenav/sidenav.component';
import { DashboardComponent } from './employee/dashboard/dashboard.component';
//import { NewemployeeComponent } from './employee/newemployee/newemployee.component';
import { SalaryComponent } from './employee/salary/salary.component';
//import { EmplistComponent } from './employee/emplist/emplist.component';
//import { RegisterComponent } from './employee/register/register.component';
import { EmployeeFormComponent } from './employee/employee-form/employee-form.component';
import { AttendanceComponent } from './employee/attendance/attendance.component';


const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  { path: 'emp', component: EmployeeFormComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'salary', component: SalaryComponent },
  { path: 'attendance', component: AttendanceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
