import { Injectable } from '@angular/core';
import { Flight } from '../component/flight/data';
import { Mockflight } from './mockflight';

@Injectable({
  providedIn: 'root'
})
export class PageService {
 flights:Flight[]=[]
 constructor() {
    this.flights=Mockflight.mockflight
   }
 getPages(){
   return this.flights
 }

 addflight(ticket:Flight){
   this.flights.push(ticket)
 }
}
