import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTooltipsPopoversComponent } from './ui-tooltips-popovers.component';

describe('UiTooltipsPopoversComponent', () => {
  let component: UiTooltipsPopoversComponent;
  let fixture: ComponentFixture<UiTooltipsPopoversComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiTooltipsPopoversComponent]
    });
    fixture = TestBed.createComponent(UiTooltipsPopoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
