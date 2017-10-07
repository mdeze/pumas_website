import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryoutsExpectComponent } from './tryouts-expect.component';

describe('TryoutsExpectComponent', () => {
  let component: TryoutsExpectComponent;
  let fixture: ComponentFixture<TryoutsExpectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryoutsExpectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryoutsExpectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
