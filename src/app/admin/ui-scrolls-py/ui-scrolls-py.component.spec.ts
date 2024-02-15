import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiScrollsPyComponent } from './ui-scrolls-py.component';

describe('UiScrollsPyComponent', () => {
  let component: UiScrollsPyComponent;
  let fixture: ComponentFixture<UiScrollsPyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiScrollsPyComponent]
    });
    fixture = TestBed.createComponent(UiScrollsPyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
