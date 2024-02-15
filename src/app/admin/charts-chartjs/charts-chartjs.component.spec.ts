import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsChartjsComponent } from './charts-chartjs.component';

describe('ChartsChartjsComponent', () => {
  let component: ChartsChartjsComponent;
  let fixture: ComponentFixture<ChartsChartjsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsChartjsComponent]
    });
    fixture = TestBed.createComponent(ChartsChartjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
