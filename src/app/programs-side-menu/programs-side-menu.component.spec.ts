import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsSideMenuComponent } from './programs-side-menu.component';

describe('ProgramsSideMenuComponent', () => {
  let component: ProgramsSideMenuComponent;
  let fixture: ComponentFixture<ProgramsSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramsSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
