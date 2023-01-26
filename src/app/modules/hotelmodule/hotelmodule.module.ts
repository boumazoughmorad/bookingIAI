import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelmoduleRoutingModule } from './hotelmodule-routing.module';
import { HotelmoduleComponent } from '../hotelmodule/hotelmodule.component';
import { ListHotelComponent } from './list-hotel/list-hotel.component';


@NgModule({
  declarations: [
    HotelmoduleComponent,
    ListHotelComponent
  ],
  imports: [
    CommonModule,
    HotelmoduleRoutingModule
  ]
})
export class HotelmoduleModule { }
