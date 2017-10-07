import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryOffCourtComponent } from './gallery-off-court.component';

describe('GalleryOffCourtComponent', () => {
  let component: GalleryOffCourtComponent;
  let fixture: ComponentFixture<GalleryOffCourtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryOffCourtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryOffCourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
