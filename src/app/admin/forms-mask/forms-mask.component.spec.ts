import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsMaskComponent } from './forms-mask.component';

describe('FormsMaskComponent', () => {
  let component: FormsMaskComponent;
  let fixture: ComponentFixture<FormsMaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsMaskComponent]
    });
    fixture = TestBed.createComponent(FormsMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
