import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Programs12uCoedFallComponent } from './programs-12u-coed-fall.component';

describe('Programs12uCoedFallComponent', () => {
  let component: Programs12uCoedFallComponent;
  let fixture: ComponentFixture<Programs12uCoedFallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Programs12uCoedFallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Programs12uCoedFallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
