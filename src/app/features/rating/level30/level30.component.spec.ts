/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Level30Component } from './level30.component';

describe('Level30Component', () => {
  let component: Level30Component;
  let fixture: ComponentFixture<Level30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Level30Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
