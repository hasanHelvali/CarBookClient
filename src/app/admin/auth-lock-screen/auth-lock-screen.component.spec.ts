import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLockScreenComponent } from './auth-lock-screen.component';

describe('AuthLockScreenComponent', () => {
  let component: AuthLockScreenComponent;
  let fixture: ComponentFixture<AuthLockScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthLockScreenComponent]
    });
    fixture = TestBed.createComponent(AuthLockScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
