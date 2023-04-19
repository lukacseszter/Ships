/*
* File: ships.component.spec.ts
* Author: Lukács Eszter
* Copyright: 2023, Lukács Eszter
* Group: Szoft II/N
* Date: 2023-04-19
* Github: https://github.com/lukacseszter/
* Licenc: GNU GPL
*/

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipsComponent } from './ships.component';

describe('ShipsComponent', () => {
  let component: ShipsComponent;
  let fixture: ComponentFixture<ShipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
