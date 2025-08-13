import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  imports: [ReactiveFormsModule],
  templateUrl: './delete.html',
  styleUrl: './delete.css'
})
export class Delete implements OnInit {
  
  /**
   *
   */
  constructor(private route : ActivatedRoute , private router : Router) {}

  

  deleteData : FormGroup = new FormGroup({
    id : new FormControl(),
    FullName : new FormControl(""),
    Email : new FormControl(""),
    Password : new FormControl()
  });

  http = inject(HttpClient) ;
  id! : any
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.http.get<any>("http://localhost:5044/api/HomeApi/" + this.id).subscribe(res =>{
      this.deleteData.patchValue({
        id : res.id,
        FullName : res.fullName,
        Email : res.email,
        Password : res.password

      });

    })
  }

  onDelete(id : number){
  this.http.delete("http://localhost:5044/api/HomeApi/delete/" + id).subscribe({
    next:(value)=> {
      
      alert(" user deleted successfully")
      this.router.navigate(['/home']);
    },
    error:(err)=>{
      alert("fail to delete")
    },
  })

}


}
