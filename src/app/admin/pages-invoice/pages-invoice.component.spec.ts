import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesInvoiceComponent } from './pages-invoice.component';

describe('PagesInvoiceComponent', () => {
  let component: PagesInvoiceComponent;
  let fixture: ComponentFixture<PagesInvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagesInvoiceComponent]
    });
    fixture = TestBed.createComponent(PagesInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
