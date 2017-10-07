import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachesInterestedComponent } from './coaches-interested.component';

describe('CoachesInterestedComponent', () => {
  let component: CoachesInterestedComponent;
  let fixture: ComponentFixture<CoachesInterestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachesInterestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachesInterestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
