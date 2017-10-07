import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryChampionsListComponent } from './gallery-champions-list.component';

describe('GalleryChampionsListComponent', () => {
  let component: GalleryChampionsListComponent;
  let fixture: ComponentFixture<GalleryChampionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryChampionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryChampionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
