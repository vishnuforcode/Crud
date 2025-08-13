import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RedirectCommand, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule ,RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {


  constructor(private router : Router) {}

  formData : FormGroup = new FormGroup({
    Id :new  FormControl(0),
    Email :new  FormControl(""),
    FullName :new  FormControl(""),
    Password :new  FormControl(0),

  });

http = inject(HttpClient)
  onregister(){
    this.http.post("http://localhost:5044/api/HomeApi/register" ,this.formData.value ).subscribe({
      next:(value)=>{
      this.router.navigate(['/home']);
        alert(value)
      },
      error:(err)=> {
        alert(err)
      },
    })
  }

}
