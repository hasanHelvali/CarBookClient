import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiButonsComponent } from './ui-butons.component';

describe('UiButonsComponent', () => {
  let component: UiButonsComponent;
  let fixture: ComponentFixture<UiButonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiButonsComponent]
    });
    fixture = TestBed.createComponent(UiButonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
