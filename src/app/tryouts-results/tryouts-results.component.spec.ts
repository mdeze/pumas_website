import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryoutsResultsComponent } from './tryouts-results.component';

describe('TryoutsResultsComponent', () => {
  let component: TryoutsResultsComponent;
  let fixture: ComponentFixture<TryoutsResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryoutsResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryoutsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
