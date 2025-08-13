import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule , FormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.css'
})
export class Edit implements OnInit {
  
  /**
   * 
   *
   */
   constructor(private route : ActivatedRoute , private router : Router) {}

    

    
     http = inject(HttpClient)
    
  id! : any 
   

  // getUserById(){
  //   this.http.get("http://localhost:5044/api/HomeApi/" + this.id).subscribe((res)=>{
  //     this.user = res ;
  //   }) ;
  // }
 updateData : FormGroup<any> = new FormGroup({
  Id : new FormControl(),
      FullName :new  FormControl(""),
      Email :new  FormControl(""),
      
      Password :new  FormControl(0)
  
    });
 

    ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    

    this.http.get<any>("http://localhost:5044/api/HomeApi/" + this.id).subscribe( (res)=>{
      this.updateData.patchValue({
          Id : res.id,
          FullName: res.fullName,
          Email : res.email,
          Password : res.password
      }) ;
    });

    // console.log(this.updateData.value)
  }
  

  updateUser(){
    this.http.put("http://localhost:5044/api/HomeApi/update/"+ this.id , this.updateData.value).subscribe({
      next:(val)=>{
        this.router.navigate(['home'])
        alert(val)
      },
      error:(err)=>{
        alert(err)
      }
    })
   }
   
  
   

     
    // onEdit(id : number ){
    //     this.http.put("http://localhost:5044/api/HomeApi/update/" + this.id , this.updateData.value).subscribe({
    //      next:(val=>{
    //      alert("updated sucessfully")
    //      this.router.navigate(['home'])
    //     }),
    //     error:(err)=>{
    //     alert(err)
    //    }
    //    })

    // }

}
