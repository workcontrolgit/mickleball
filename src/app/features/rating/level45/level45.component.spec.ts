/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Level45Component } from './level45.component';

describe('Level45Component', () => {
  let component: Level45Component;
  let fixture: ComponentFixture<Level45Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Level45Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
