import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth400Component } from './auth400.component';

describe('Auth400Component', () => {
  let component: Auth400Component;
  let fixture: ComponentFixture<Auth400Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Auth400Component]
    });
    fixture = TestBed.createComponent(Auth400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
