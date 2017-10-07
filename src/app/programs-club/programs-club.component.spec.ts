import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsClubComponent } from './programs-club.component';

describe('ProgramsClubComponent', () => {
  let component: ProgramsClubComponent;
  let fixture: ComponentFixture<ProgramsClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramsClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
