import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleSideMenuComponent } from './schedule-side-menu.component';

describe('ScheduleSideMenuComponent', () => {
  let component: ScheduleSideMenuComponent;
  let fixture: ComponentFixture<ScheduleSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
