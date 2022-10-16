/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Level50Component } from './level50.component';

describe('Level50Component', () => {
  let component: Level50Component;
  let fixture: ComponentFixture<Level50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Level50Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
