import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsJncComponent } from './programs-jnc.component';

describe('ProgramsJncComponent', () => {
  let component: ProgramsJncComponent;
  let fixture: ComponentFixture<ProgramsJncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramsJncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsJncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
