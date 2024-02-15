import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsPluginComponent } from './forms-plugin.component';

describe('FormsPluginComponent', () => {
  let component: FormsPluginComponent;
  let fixture: ComponentFixture<FormsPluginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsPluginComponent]
    });
    fixture = TestBed.createComponent(FormsPluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
