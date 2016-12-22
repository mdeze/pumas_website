/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoachesBioComponent } from './coaches-bio.component';

describe('CoachesBioComponent', () => {
  let component: CoachesBioComponent;
  let fixture: ComponentFixture<CoachesBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachesBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachesBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
