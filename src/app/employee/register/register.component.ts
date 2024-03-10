import { Component } from '@angular/core';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.less'
})
export class RegisterComponent {

  registerObj = {
    fullname: '',
    username: '',
    email: '',
    password: ''
  };

  registerList: any = [];

  onSubmit(){
    console.log(`this.registerObj`, this.registerObj)
    this.registerList.push(this.registerObj);
    localStorage.setItem('register', JSON.stringify(this.registerList));
    this.registerObj = {
      fullname: '',
      username: '',
      email: '',
      password: ''
    };
  }

}
