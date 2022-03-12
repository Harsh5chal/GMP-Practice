import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  submit(): void {
    this.http.post('http://localhost:3000/user', this.userForm.getRawValue(), {withCredentials:true})
    .subscribe(() =>
      this.router.navigate(['/'])
    );
  }

}
