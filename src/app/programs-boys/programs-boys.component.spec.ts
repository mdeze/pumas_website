import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsBoysComponent } from './programs-boys.component';

describe('ProgramsBoysComponent', () => {
  let component: ProgramsBoysComponent;
  let fixture: ComponentFixture<ProgramsBoysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramsBoysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsBoysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
