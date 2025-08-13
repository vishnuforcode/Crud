import { Component, inject, OnInit } from '@angular/core';
import { Card } from "../card/card";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Card , AsyncPipe ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{

  allProducts$: Observable<any[]> = new Observable();


  private http = inject(HttpClient)

  ngOnInit(): void {
    this.allProducts$ = this.http.get<any[]>("http://localhost:5044/api/HomeApi") ;
  }


}
