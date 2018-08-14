import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportByVinComponent } from './report-by-vin.component';

describe('ReportByVinComponent', () => {
  let component: ReportByVinComponent;
  let fixture: ComponentFixture<ReportByVinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportByVinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportByVinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
