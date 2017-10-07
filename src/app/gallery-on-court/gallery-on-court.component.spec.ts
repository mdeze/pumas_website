import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryOnCourtComponent } from './gallery-on-court.component';

describe('GalleryOnCourtComponent', () => {
  let component: GalleryOnCourtComponent;
  let fixture: ComponentFixture<GalleryOnCourtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryOnCourtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryOnCourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
