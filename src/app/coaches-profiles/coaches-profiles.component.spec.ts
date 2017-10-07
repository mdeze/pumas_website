import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachesProfilesComponent } from './coaches-profiles.component';

describe('CoachesProfilesComponent', () => {
  let component: CoachesProfilesComponent;
  let fixture: ComponentFixture<CoachesProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachesProfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachesProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
