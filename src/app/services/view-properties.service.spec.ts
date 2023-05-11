import { TestBed } from '@angular/core/testing';

import { ViewPropertiesService } from './view-properties.service';

describe('ViewPropertiesService', () => {
  let service: ViewPropertiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewPropertiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
