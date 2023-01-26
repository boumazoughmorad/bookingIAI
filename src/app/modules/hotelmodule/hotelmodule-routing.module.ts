import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHotelComponent } from './list-hotel/list-hotel.component';

const routes: Routes = [
  {
    path:'',
    component:ListHotelComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelmoduleRoutingModule { }
