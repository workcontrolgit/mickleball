/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Level25Component } from './level25.component';

describe('Level25Component', () => {
  let component: Level25Component;
  let fixture: ComponentFixture<Level25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Level25Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
