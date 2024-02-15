import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesStarterComponent } from './pages-starter.component';

describe('PagesStarterComponent', () => {
  let component: PagesStarterComponent;
  let fixture: ComponentFixture<PagesStarterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesStarterComponent]
    });
    fixture = TestBed.createComponent(PagesStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
