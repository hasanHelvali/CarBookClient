import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCarouselComponent } from './ui-carousel.component';

describe('UiCarouselComponent', () => {
  let component: UiCarouselComponent;
  let fixture: ComponentFixture<UiCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiCarouselComponent]
    });
    fixture = TestBed.createComponent(UiCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
