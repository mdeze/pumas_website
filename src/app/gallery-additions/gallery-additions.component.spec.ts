import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryAdditionsComponent } from './gallery-additions.component';

describe('GalleryAdditionsComponent', () => {
  let component: GalleryAdditionsComponent;
  let fixture: ComponentFixture<GalleryAdditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryAdditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryAdditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
