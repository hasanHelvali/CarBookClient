import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiGeneralComponent } from './ui-general.component';

describe('UiGeneralComponent', () => {
  let component: UiGeneralComponent;
  let fixture: ComponentFixture<UiGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiGeneralComponent]
    });
    fixture = TestBed.createComponent(UiGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
