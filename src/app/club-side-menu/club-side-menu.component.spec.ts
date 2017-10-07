import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubSideMenuComponent } from './club-side-menu.component';

describe('ClubSideMenuComponent', () => {
  let component: ClubSideMenuComponent;
  let fixture: ComponentFixture<ClubSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
