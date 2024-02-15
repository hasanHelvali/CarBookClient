import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServisComponent } from './servis.component';

describe('ServisComponent', () => {
  let component: ServisComponent;
  let fixture: ComponentFixture<ServisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServisComponent]
    });
    fixture = TestBed.createComponent(ServisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
