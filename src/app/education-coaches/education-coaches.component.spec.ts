import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCoachesComponent } from './education-coaches.component';

describe('EducationCoachesComponent', () => {
  let component: EducationCoachesComponent;
  let fixture: ComponentFixture<EducationCoachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationCoachesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationCoachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
