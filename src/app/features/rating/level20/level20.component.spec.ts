/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Level20Component } from './level20.component';

describe('Level20Component', () => {
  let component: Level20Component;
  let fixture: ComponentFixture<Level20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Level20Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
