import { TestBed } from '@angular/core/testing';

import { HotelmoduleService } from './hotelmodule.service';

describe('HotelmoduleService', () => {
  let service: HotelmoduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelmoduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
