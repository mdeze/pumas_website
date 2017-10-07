import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamRosterSideMenuComponent } from './team-roster-side-menu.component';

describe('TeamRosterSideMenuComponent', () => {
  let component: TeamRosterSideMenuComponent;
  let fixture: ComponentFixture<TeamRosterSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamRosterSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamRosterSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
