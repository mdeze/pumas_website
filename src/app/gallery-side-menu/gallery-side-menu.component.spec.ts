import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySideMenuComponent } from './gallery-side-menu.component';

describe('GallerySideMenuComponent', () => {
  let component: GallerySideMenuComponent;
  let fixture: ComponentFixture<GallerySideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerySideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerySideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
