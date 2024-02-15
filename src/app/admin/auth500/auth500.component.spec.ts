import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Auth500Component } from './auth500.component';

describe('Auth500Component', () => {
  let component: Auth500Component;
  let fixture: ComponentFixture<Auth500Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Auth500Component]
    });
    fixture = TestBed.createComponent(Auth500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
