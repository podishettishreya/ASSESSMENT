import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: LoginForm={
    email :'',
    password:'',
  };

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.form);
  }

}
