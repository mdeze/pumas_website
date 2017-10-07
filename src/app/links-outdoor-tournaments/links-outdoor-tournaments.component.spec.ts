import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksOutdoorTournamentsComponent } from './links-outdoor-tournaments.component';

describe('LinksOutdoorTournamentsComponent', () => {
  let component: LinksOutdoorTournamentsComponent;
  let fixture: ComponentFixture<LinksOutdoorTournamentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksOutdoorTournamentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksOutdoorTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
