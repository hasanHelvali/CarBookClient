import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiToastrComponent } from './ui-toastr.component';

describe('UiToastrComponent', () => {
  let component: UiToastrComponent;
  let fixture: ComponentFixture<UiToastrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiToastrComponent]
    });
    fixture = TestBed.createComponent(UiToastrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
