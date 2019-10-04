import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationPlayerComponent } from './education-player.component';

describe('EducationPlayerComponent', () => {
  let component: EducationPlayerComponent;
  let fixture: ComponentFixture<EducationPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
