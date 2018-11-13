import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Programs12uCoedComponent } from './programs-12u-coed.component';

describe('Programs12uCoedComponent', () => {
  let component: Programs12uCoedComponent;
  let fixture: ComponentFixture<Programs12uCoedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Programs12uCoedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Programs12uCoedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
