import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchTransportFinishComponent } from './batch-transport-finish.component';

describe('BatchTransportFinishComponent', () => {
  let component: BatchTransportFinishComponent;
  let fixture: ComponentFixture<BatchTransportFinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchTransportFinishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchTransportFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
