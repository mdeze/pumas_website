import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubFaqComponent } from './club-faq.component';

describe('ClubFaqComponent', () => {
  let component: ClubFaqComponent;
  let fixture: ComponentFixture<ClubFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
