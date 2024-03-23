import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.less'
})
export class SidenavComponent {

  isSlideOut = true;

  constructor(private router: Router){}

  toggleSlideOut(): void{
    this.isSlideOut = !this.isSlideOut;
  }

  onDash(){
    this.router.navigate(['/employee/dashboard']);
  }
  navigateToEmpDetailsPage(){
    this.router.navigate(['/employee/emp']);
  }
  navigateToEmpSalaryPage(){
    this.router.navigate(['/employee/salary']);
  }
  navigateToEmpAttendancePage(){
    this.router.navigate(['employee/attendance']);
  }
  onLogout(){
    this.router.navigate(['/employee/login']);
  }

}
