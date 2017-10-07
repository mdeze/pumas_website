import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsCostComponent } from './programs-cost.component';

describe('ProgramsCostComponent', () => {
  let component: ProgramsCostComponent;
  let fixture: ComponentFixture<ProgramsCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramsCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
