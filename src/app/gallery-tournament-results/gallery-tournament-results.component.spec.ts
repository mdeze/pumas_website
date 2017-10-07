import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryTournamentResultsComponent } from './gallery-tournament-results.component';

describe('GalleryTournamentResultsComponent', () => {
  let component: GalleryTournamentResultsComponent;
  let fixture: ComponentFixture<GalleryTournamentResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryTournamentResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryTournamentResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
