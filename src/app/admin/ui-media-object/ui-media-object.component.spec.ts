import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMediaObjectComponent } from './ui-media-object.component';

describe('UiMediaObjectComponent', () => {
  let component: UiMediaObjectComponent;
  let fixture: ComponentFixture<UiMediaObjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiMediaObjectComponent]
    });
    fixture = TestBed.createComponent(UiMediaObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
