import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsMaterialDesignComponent } from './icons-material-design.component';

describe('IconsMaterialDesignComponent', () => {
  let component: IconsMaterialDesignComponent;
  let fixture: ComponentFixture<IconsMaterialDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconsMaterialDesignComponent]
    });
    fixture = TestBed.createComponent(IconsMaterialDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
