import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsPhilosophyComponent } from './programs-philosophy.component';

describe('ProgramsPhilosophyComponent', () => {
  let component: ProgramsPhilosophyComponent;
  let fixture: ComponentFixture<ProgramsPhilosophyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramsPhilosophyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsPhilosophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
