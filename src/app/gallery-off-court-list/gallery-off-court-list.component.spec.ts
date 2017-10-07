import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryOffCourtListComponent } from './gallery-off-court-list.component';

describe('GalleryOffCourtListComponent', () => {
  let component: GalleryOffCourtListComponent;
  let fixture: ComponentFixture<GalleryOffCourtListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryOffCourtListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryOffCourtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
