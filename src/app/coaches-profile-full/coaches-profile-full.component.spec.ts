import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachesProfileFullComponent } from './coaches-profile-full.component';

describe('CoachesProfileFullComponent', () => {
  let component: CoachesProfileFullComponent;
  let fixture: ComponentFixture<CoachesProfileFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachesProfileFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachesProfileFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
