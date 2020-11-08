import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //  Private Properties
  private url = 'http://localhost:3000/';
  constructor(private http: HttpClient) {
  }

  //  Public Methods
  getHtml(): Observable<any> {
    return of(`<div> <p> {{user?.firstname}}  {{user?.lastname}} </p> <button class='button-color' (click)='clickMe()'>Click Me! </button> </div>   <div *ngIf='showText'> <p> You clicked the button!</p></div> `);
  }

  getUser(): Observable<any> {
    return of({
      firstname: 'Vincent',
      lastname: 'Lemaitre'
    });
  }
}
