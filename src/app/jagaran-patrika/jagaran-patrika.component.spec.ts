import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JagaranPatrikaComponent } from './jagaran-patrika.component';

describe('JagaranPatrikaComponent', () => {
  let component: JagaranPatrikaComponent;
  let fixture: ComponentFixture<JagaranPatrikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JagaranPatrikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JagaranPatrikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
