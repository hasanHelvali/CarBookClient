import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsUploadsComponent } from './forms-uploads.component';

describe('FormsUploadsComponent', () => {
  let component: FormsUploadsComponent;
  let fixture: ComponentFixture<FormsUploadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsUploadsComponent]
    });
    fixture = TestBed.createComponent(FormsUploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
