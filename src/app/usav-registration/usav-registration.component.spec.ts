import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsavRegistrationComponent } from './usav-registration.component';

describe('UsavRegistrationComponent', () => {
  let component: UsavRegistrationComponent;
  let fixture: ComponentFixture<UsavRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsavRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsavRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
