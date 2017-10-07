import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryOnCourtListComponent } from './gallery-on-court-list.component';

describe('GalleryOnCourtListComponent', () => {
  let component: GalleryOnCourtListComponent;
  let fixture: ComponentFixture<GalleryOnCourtListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryOnCourtListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryOnCourtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
