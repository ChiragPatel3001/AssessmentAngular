import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Login Service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  constructor(private login: LoginService,private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {
        password: ['',],
        email: ['',]
      }
      )
    }
    get f() { return this.loginForm.controls; }  
     
    onLogin(){
      this.submitted= true;
      if(this.loginForm.valid){
        this.login.loginData(this.loginForm.value).subscribe((res)=> {
          this.login.setToken(res.token);
          this.router.navigateByUrl("/mvp/mvp-list")
        }
        )
      }
    } 
}
