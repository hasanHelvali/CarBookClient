import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsDripiconsComponent } from './icons-dripicons.component';

describe('IconsDripiconsComponent', () => {
  let component: IconsDripiconsComponent;
  let fixture: ComponentFixture<IconsDripiconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconsDripiconsComponent]
    });
    fixture = TestBed.createComponent(IconsDripiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
