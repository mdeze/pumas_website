import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsParentsGuideComponent } from './programs-parents-guide.component';

describe('ProgramsParentsGuideComponent', () => {
  let component: ProgramsParentsGuideComponent;
  let fixture: ComponentFixture<ProgramsParentsGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramsParentsGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsParentsGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
