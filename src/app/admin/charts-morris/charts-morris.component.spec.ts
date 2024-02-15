import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsMorrisComponent } from './charts-morris.component';

describe('ChartsMorrisComponent', () => {
  let component: ChartsMorrisComponent;
  let fixture: ComponentFixture<ChartsMorrisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsMorrisComponent]
    });
    fixture = TestBed.createComponent(ChartsMorrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
