import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,){}

    logInForm: any;
    ngOnInit(): void{
      this.logInForm = this.formBuilder.group({
        "emailId": new FormControl(null,[Validators.required, Validators.pattern("^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$")]),
        "password": new FormControl(null,[Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")])
      });
    }

  login(): void {
    this.http.get<any>("http://localhost:3000/user")
    .subscribe(res =>{
      const user = res.find((a:any)=>{
        return a.email === this.logInForm.value.emailId && a.password === this.logInForm.value.password
      });
      if(user){
        alert("Login successful!");
        this.logInForm.reset();
        this.router.navigate(['/home'])
      }else{
        alert("Login failed!");
      }
     }
    );
    
  }
  get mail() {
    return this.logInForm.get('emailId');
  }
  get pass() {
    return this.logInForm.get('password');
  }
}
