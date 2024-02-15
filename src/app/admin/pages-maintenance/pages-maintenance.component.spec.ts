import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesMaintenanceComponent } from './pages-maintenance.component';

describe('PagesMaintenanceComponent', () => {
  let component: PagesMaintenanceComponent;
  let fixture: ComponentFixture<PagesMaintenanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesMaintenanceComponent]
    });
    fixture = TestBed.createComponent(PagesMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
