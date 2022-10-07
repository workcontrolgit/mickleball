import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level35Component } from './level35.component';

describe('Level35Component', () => {
  let component: Level35Component;
  let fixture: ComponentFixture<Level35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Level35Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Level35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
