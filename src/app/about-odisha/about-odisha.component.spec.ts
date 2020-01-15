import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOdishaComponent } from './about-odisha.component';

describe('AboutOdishaComponent', () => {
  let component: AboutOdishaComponent;
  let fixture: ComponentFixture<AboutOdishaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutOdishaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOdishaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
