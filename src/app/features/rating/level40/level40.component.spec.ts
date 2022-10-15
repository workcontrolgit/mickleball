/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Level40Component } from './level40.component';

describe('Level40Component', () => {
  let component: Level40Component;
  let fixture: ComponentFixture<Level40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Level40Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
