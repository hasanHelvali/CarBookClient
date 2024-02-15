import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsValidationComponent } from './forms-validation.component';

describe('FormsValidationComponent', () => {
  let component: FormsValidationComponent;
  let fixture: ComponentFixture<FormsValidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsValidationComponent]
    });
    fixture = TestBed.createComponent(FormsValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
