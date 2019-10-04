import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationSideMenuComponent } from './education-side-menu.component';

describe('EducationSideMenuComponent', () => {
  let component: EducationSideMenuComponent;
  let fixture: ComponentFixture<EducationSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
