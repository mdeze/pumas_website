/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LinksSummerCampsComponent } from './links-summer-camps.component';

describe('LinksSummerCampsComponent', () => {
  let component: LinksSummerCampsComponent;
  let fixture: ComponentFixture<LinksSummerCampsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksSummerCampsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksSummerCampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
