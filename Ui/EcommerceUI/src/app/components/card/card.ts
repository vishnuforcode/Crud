import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Edit } from '../edit/edit';

@Component({
  selector: 'app-card',
  imports: [RouterLink ],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {

  /**
   *
   */
  constructor(private route: Router) {}
  @Input() item!: {id:number ,fullName : string , email:string }
https: any;

http = inject(HttpClient)



}
