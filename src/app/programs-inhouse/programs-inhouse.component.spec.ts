import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsInhouseComponent } from './programs-inhouse.component';

describe('ProgramsInhouseComponent', () => {
  let component: ProgramsInhouseComponent;
  let fixture: ComponentFixture<ProgramsInhouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramsInhouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsInhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
