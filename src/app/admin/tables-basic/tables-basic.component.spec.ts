import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesBasicComponent } from './tables-basic.component';

describe('TablesBasicComponent', () => {
  let component: TablesBasicComponent;
  let fixture: ComponentFixture<TablesBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablesBasicComponent]
    });
    fixture = TestBed.createComponent(TablesBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
