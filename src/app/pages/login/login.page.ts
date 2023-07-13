import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 public form!: FormGroup;
 emailField!: FormGroup ;
 passwordField!: FormGroup ;

  constructor(private router:Router,private formBuilder:FormBuilder) { }
//we need to create a form as soon as the loginpage is initializes 
  ngOnInit() {
    this.form=new LoginPageForm(this.formBuilder).createForm();
    this.emailField = this.form.get('email') as FormGroup;
    this.passwordField = this.form.get('password') as FormGroup;
  }
  login(){
    this.router.navigate(['home'])
  }
  register(){
    this.router.navigate(['register'])
  }

}
