import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: '',
      email: '',
      password: '',
    });
  }

  submit(): void {
    this.http.post('http://localhost:3000/user', this.userForm.getRawValue())
    .subscribe(() =>{
      this.router.navigate(['/login']);
    });
    // console.log(this.userForm.getRawValue());
  }
}
