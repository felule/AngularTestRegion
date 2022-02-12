import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GeoApiService } from './geoApi.service';

describe('GeoService', () => {
  let service: GeoApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    })
    .compileComponents();
  });


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
