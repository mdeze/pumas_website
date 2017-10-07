import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubAboutComponent } from './club-about.component';

describe('ClubAboutComponent', () => {
  let component: ClubAboutComponent;
  let fixture: ComponentFixture<ClubAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
