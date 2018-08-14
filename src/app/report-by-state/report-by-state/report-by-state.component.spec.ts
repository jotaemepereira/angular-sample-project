import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportByStateComponent } from './report-by-state.component';

describe('ReportByStateComponent', () => {
  let component: ReportByStateComponent;
  let fixture: ComponentFixture<ReportByStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportByStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportByStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
