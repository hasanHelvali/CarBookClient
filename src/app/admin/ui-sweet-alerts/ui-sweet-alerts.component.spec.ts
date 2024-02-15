import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSweetAlertsComponent } from './ui-sweet-alerts.component';

describe('UiSweetAlertsComponent', () => {
  let component: UiSweetAlertsComponent;
  let fixture: ComponentFixture<UiSweetAlertsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiSweetAlertsComponent]
    });
    fixture = TestBed.createComponent(UiSweetAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
