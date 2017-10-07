import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryoutsRegistrationComponent } from './tryouts-registration.component';

describe('TryoutsRegistrationComponent', () => {
  let component: TryoutsRegistrationComponent;
  let fixture: ComponentFixture<TryoutsRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryoutsRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryoutsRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
