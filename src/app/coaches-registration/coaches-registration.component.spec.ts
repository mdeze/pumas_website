import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachesRegistrationComponent } from './coaches-registration.component';

describe('CoachesRegistrationComponent', () => {
  let component: CoachesRegistrationComponent;
  let fixture: ComponentFixture<CoachesRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachesRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachesRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
