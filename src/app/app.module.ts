import { NgModule } from "@angular/core";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { EmployeeRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import {EmployeeFormComponent} from "./employee/employee-form/employee-form.component";

@NgModule({
    declarations: [EmployeeFormComponent],
    imports: [
        CommonModule,
        EmployeeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,

    ],
  exports: [EmployeeFormComponent],
    providers: [provideClientHydration()],

})

export class AppModule{

}

