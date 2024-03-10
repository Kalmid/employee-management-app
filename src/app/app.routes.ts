import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'employee', loadChildren:()=> import('./app-routing.module').then(m=>m.EmployeeRoutingModule)}
];
