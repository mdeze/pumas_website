import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsRecentComponent } from './news-recent.component';

describe('NewsRecentComponent', () => {
  let component: NewsRecentComponent;
  let fixture: ComponentFixture<NewsRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
