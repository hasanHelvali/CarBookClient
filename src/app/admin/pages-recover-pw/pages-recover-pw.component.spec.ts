import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesRecoverPwComponent } from './pages-recover-pw.component';

describe('PagesRecoverPwComponent', () => {
  let component: PagesRecoverPwComponent;
  let fixture: ComponentFixture<PagesRecoverPwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesRecoverPwComponent]
    });
    fixture = TestBed.createComponent(PagesRecoverPwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
