import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
       private http: HttpClient,
       private router: Router,){}

  registerForm: any;
  ngOnInit(): void{
    this.registerForm = this.formBuilder.group({
      "firstName": new FormControl(null,[Validators.required, Validators.pattern("[a-zA-Z]*")]),
      "lastName": new FormControl(null,[Validators.required, Validators.pattern("[a-zA-Z]*")]),
      "emailId": new FormControl(null,[Validators.required, Validators.pattern("^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$")]),
      "password": new FormControl(null,[Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")])
    });
  }
  submitData(){
    this.http.post('http://localhost:3000/user', this.registerForm.getRawValue())
    .subscribe(() =>{
      this.router.navigate(['/login']);
    }
    );
  }

  get firstname() {
    return this.registerForm.get('firstName');
  }
  get lastname() {
    return this.registerForm.get('lastName');
  }
  get mail() {
    return this.registerForm.get('emailId');
  }
  get pass() {
    return this.registerForm.get('password');
  }
}
