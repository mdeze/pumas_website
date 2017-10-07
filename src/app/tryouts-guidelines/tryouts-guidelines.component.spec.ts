import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryoutsGuidelinesComponent } from './tryouts-guidelines.component';

describe('TryoutsGuidelinesComponent', () => {
  let component: TryoutsGuidelinesComponent;
  let fixture: ComponentFixture<TryoutsGuidelinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryoutsGuidelinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryoutsGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
