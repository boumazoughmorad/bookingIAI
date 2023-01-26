import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { HotelmoduleService } from '../hotelmodule.service';

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.css']
})
export class ListHotelComponent implements OnInit{
  dataHotel!:any;
  ngOnInit(): void {
this.hotelSerives.getALLHotels().subscribe(data =>{
  console.log(data);
  
  this.dataHotel=data;
  

},error =>{
  
  this.router.navigateByUrl('/error500');
});
  }
constructor(private hotelSerives:HotelmoduleService,private router:Router){

}
}
