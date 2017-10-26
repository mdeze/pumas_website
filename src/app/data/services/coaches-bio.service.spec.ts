import { TestBed, inject } from '@angular/core/testing';

import { CoachesBioService } from './coaches-bio.service';

describe('CoachesBioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoachesBioService]
    });
  });

  it('should be created', inject([CoachesBioService], (service: CoachesBioService) => {
    expect(service).toBeTruthy();
  }));
});
