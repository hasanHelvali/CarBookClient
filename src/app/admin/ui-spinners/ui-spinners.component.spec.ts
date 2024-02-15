import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSpinnersComponent } from './ui-spinners.component';

describe('UiSpinnersComponent', () => {
  let component: UiSpinnersComponent;
  let fixture: ComponentFixture<UiSpinnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiSpinnersComponent]
    });
    fixture = TestBed.createComponent(UiSpinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
