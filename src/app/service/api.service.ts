/*
* File: api.service.ts
* Author: Lukács Eszter
* Copyright: 2023, Lukács Eszter
* Group: Szoft II/N
* Date: 2023-04-19
* Github: https://github.com/lukacseszter/
* Licenc: GNU GPL
*/

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "http://localhost:8000/ships";
  addShips: any;

  constructor(private http:HttpClient) { }

  getShips(){
    let header = new HttpHeaders({
      'Content-Type':'application/json'
    });

    let httpOption={
      headers:header
    }

    return this.http.get<any>(this.url, httpOption);
  }


  addShip(ship: any) {
    return this.http.post(this.url, ship);
  }

}

