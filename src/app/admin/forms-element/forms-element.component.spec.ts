import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsElementComponent } from './forms-element.component';

describe('FormsElementComponent', () => {
  let component: FormsElementComponent;
  let fixture: ComponentFixture<FormsElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsElementComponent]
    });
    fixture = TestBed.createComponent(FormsElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
