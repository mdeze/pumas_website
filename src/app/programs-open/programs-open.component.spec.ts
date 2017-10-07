import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsOpenComponent } from './programs-open.component';

describe('ProgramsOpenComponent', () => {
  let component: ProgramsOpenComponent;
  let fixture: ComponentFixture<ProgramsOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramsOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
