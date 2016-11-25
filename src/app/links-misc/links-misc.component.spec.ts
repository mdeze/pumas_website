/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LinksMiscComponent } from './links-misc.component';

describe('LinksMiscComponent', () => {
  let component: LinksMiscComponent;
  let fixture: ComponentFixture<LinksMiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksMiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksMiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
