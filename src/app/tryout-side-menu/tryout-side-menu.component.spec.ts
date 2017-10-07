import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryoutSideMenuComponent } from './tryout-side-menu.component';

describe('TryoutSideMenuComponent', () => {
  let component: TryoutSideMenuComponent;
  let fixture: ComponentFixture<TryoutSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryoutSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryoutSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
