import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelmoduleComponent } from './hotelmodule.component';

describe('HotelmoduleComponent', () => {
  let component: HotelmoduleComponent;
  let fixture: ComponentFixture<HotelmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelmoduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
