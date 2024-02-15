import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSingleComponent } from './car-single.component';

describe('CarSingleComponent', () => {
  let component: CarSingleComponent;
  let fixture: ComponentFixture<CarSingleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarSingleComponent]
    });
    fixture = TestBed.createComponent(CarSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
