/*
* File: ships.component.ts
* Author: Lukács Eszter
* Copyright: 2023, Lukács Eszter
* Group: Szoft II/N
* Date: 2023-04-19
* Github: https://github.com/lukacseszter/
* Licenc: GNU GPL
*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {
  ships !: any;
  ShipsForm !: FormGroup
  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.getShips();
    this.ShipsForm = this.formBuilder.group({
      id: [''],
      name: [''],
      length: [''],
      price: [''],
      person: [''],
      trailer: [''],
    });

  }
  getShips() {
    this.api.getShips().subscribe({
      next: (response:any) => {
        console.log(response)
        this.ships = response;
      },
      error: () => {}
    });
  }

  onClickSaveButton() {

    let employee = {
      name: this.ShipsForm.value.name,
      city: this.ShipsForm.value.city,
      salary: this.ShipsForm.value.salary
    }
    this.api.addShips(this.ships).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: () => {}
    });
  }

}
