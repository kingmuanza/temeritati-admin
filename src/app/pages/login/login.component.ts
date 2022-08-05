import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, RequiredValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(private fb: FormBuilder,private authservice: AccountService,private router: Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      login: ["login", [Validators.required]],
      password: ["passe", [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.router.navigate(['login', 'first']);
      /* this.authservice.login(this.validateForm.value.login,this.validateForm.value.password).subscribe(res =>{
        if(res.Id > 0){
          alert("Successfully logged in");
          localStorage.setItem('user', res);
        }
        else{
          alert("Email address or password is invalid!");
        }
      }) */
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  
}
