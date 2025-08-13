import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  /**
   *
   */
  constructor(private router : Router) {}

  LoginFormdata : FormGroup = new FormGroup({
    Email : new FormControl(""),
    Password: new FormControl(0)
  });

http = inject(HttpClient)
  onLogin(){
    this.http.post("http://localhost:5044/api/HomeApi/login", this.LoginFormdata.value).subscribe({
      next:(val)=>{
        this.router.navigate(['/home']);
        alert(val)
      },
      error:(err)=>{
        alert(err)
      }
    })
    
  }
}
