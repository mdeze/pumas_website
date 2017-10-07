import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubDirectionsComponent } from './club-directions.component';

describe('ClubDirectionsComponent', () => {
  let component: ClubDirectionsComponent;
  let fixture: ComponentFixture<ClubDirectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubDirectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
