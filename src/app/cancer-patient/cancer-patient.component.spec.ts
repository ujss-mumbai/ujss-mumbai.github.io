import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancerPatientComponent } from './cancer-patient.component';

describe('CancerPatientComponent', () => {
  let component: CancerPatientComponent;
  let fixture: ComponentFixture<CancerPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancerPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancerPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
