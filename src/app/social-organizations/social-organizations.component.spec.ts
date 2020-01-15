import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialOrganizationsComponent } from './social-organizations.component';

describe('SocialOrganizationsComponent', () => {
  let component: SocialOrganizationsComponent;
  let fixture: ComponentFixture<SocialOrganizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialOrganizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
