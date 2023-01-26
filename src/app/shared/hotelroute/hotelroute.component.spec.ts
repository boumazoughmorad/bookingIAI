import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelrouteComponent } from './hotelroute.component';

describe('HotelrouteComponent', () => {
  let component: HotelrouteComponent;
  let fixture: ComponentFixture<HotelrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelrouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
