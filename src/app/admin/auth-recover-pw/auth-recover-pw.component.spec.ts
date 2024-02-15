import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRecoverPwComponent } from './auth-recover-pw.component';

describe('AuthRecoverPwComponent', () => {
  let component: AuthRecoverPwComponent;
  let fixture: ComponentFixture<AuthRecoverPwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthRecoverPwComponent]
    });
    fixture = TestBed.createComponent(AuthRecoverPwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
