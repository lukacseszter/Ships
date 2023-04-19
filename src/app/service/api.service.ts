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

