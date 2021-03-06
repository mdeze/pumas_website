import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachesSideMenuComponent } from './coaches-side-menu.component';

describe('CoachesSideMenuComponent', () => {
  let component: CoachesSideMenuComponent;
  let fixture: ComponentFixture<CoachesSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachesSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachesSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
