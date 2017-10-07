import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubBodComponent } from './club-bod.component';

describe('ClubBodComponent', () => {
  let component: ClubBodComponent;
  let fixture: ComponentFixture<ClubBodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubBodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubBodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
