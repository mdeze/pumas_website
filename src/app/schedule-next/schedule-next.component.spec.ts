import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleNextComponent } from './schedule-next.component';

describe('ScheduleNextComponent', () => {
  let component: ScheduleNextComponent;
  let fixture: ComponentFixture<ScheduleNextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleNextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
