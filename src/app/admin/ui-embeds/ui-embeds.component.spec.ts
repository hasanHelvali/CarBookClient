import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiEmbedsComponent } from './ui-embeds.component';

describe('UiEmbedsComponent', () => {
  let component: UiEmbedsComponent;
  let fixture: ComponentFixture<UiEmbedsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiEmbedsComponent]
    });
    fixture = TestBed.createComponent(UiEmbedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
