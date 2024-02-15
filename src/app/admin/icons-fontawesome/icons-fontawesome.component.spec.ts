import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsFontawesomeComponent } from './icons-fontawesome.component';

describe('IconsFontawesomeComponent', () => {
  let component: IconsFontawesomeComponent;
  let fixture: ComponentFixture<IconsFontawesomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconsFontawesomeComponent]
    });
    fixture = TestBed.createComponent(IconsFontawesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
