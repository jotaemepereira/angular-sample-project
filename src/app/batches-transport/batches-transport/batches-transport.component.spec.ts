import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchesTransportComponent } from './batches-transport.component';

describe('BatchesTransportComponent', () => {
  let component: BatchesTransportComponent;
  let fixture: ComponentFixture<BatchesTransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchesTransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchesTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
