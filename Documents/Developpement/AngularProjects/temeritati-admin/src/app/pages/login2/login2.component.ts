import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {

  validateForm!: FormGroup;
  showErrorMessage = false;
  showErrorMessage2 = false;
  showEnregistrerMessage = false;

  constructor(private fb: FormBuilder,private authservice: AccountService,private router: Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      passe: ["login", [Validators.required]],
      confirmation: ["passe", [Validators.required]],
    });
  }

  verifierPassword(passe: string) {
    const re = new RegExp("^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}$");
    if (re.exec(passe)) {
      return true
    } else {
      return false;
    }
  }

  submitForm(): void {
    console.log('submitForm');
    console.log(this.validateForm.valid);
    console.log(this.validateForm.value.passe);
    console.log(this.validateForm.value.confirmation);
    if (this.validateForm.valid) {
      if (this.verifierPassword(this.validateForm.value.passe)) {

        this.showErrorMessage = false;
        
        if (this.validateForm.value.passe === this.validateForm.value.confirmation) {
          
          this.showEnregistrerMessage = true;

        } else {
          this.showErrorMessage2 = true;
        }
      } else {
        this.showErrorMessage = true;
      }
      /* this.authservice.login(this.validateForm.value.login,this.validateForm.value.password).subscribe(res =>{
        if(res.Id > 0){
          alert("Successfully logged in");
          localStorage.setItem('user', res);
        }
        else{
          alert("Email address or password is invalid!");
        }
      }) */
      // this.router.navigate(['login', 'first']);
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
