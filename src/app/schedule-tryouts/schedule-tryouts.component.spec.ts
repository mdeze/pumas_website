import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleTryoutsComponent } from './schedule-tryouts.component';

describe('ScheduleTryoutsComponent', () => {
  let component: ScheduleTryoutsComponent;
  let fixture: ComponentFixture<ScheduleTryoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleTryoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleTryoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
