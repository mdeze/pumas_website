import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgegroupTesterComponent } from './agegroup-tester.component';

describe('AgegroupTesterComponent', () => {
  let component: AgegroupTesterComponent;
  let fixture: ComponentFixture<AgegroupTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgegroupTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgegroupTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
