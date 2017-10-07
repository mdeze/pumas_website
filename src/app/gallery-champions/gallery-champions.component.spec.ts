import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryChampionsComponent } from './gallery-champions.component';

describe('GalleryChampionsComponent', () => {
  let component: GalleryChampionsComponent;
  let fixture: ComponentFixture<GalleryChampionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryChampionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
