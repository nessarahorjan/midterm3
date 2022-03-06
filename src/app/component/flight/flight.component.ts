import { ForwardRefHandling } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Flight } from './data';
import { PageService } from 'src/app/share/page.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  flight!:Flight[]
  flightForm!:FormGroup
  startdate!:Date
  constructor(private form:FormBuilder,public service:PageService) {
    this.startdate=new Date(Date.now())
    this.flightForm=this.form.group({
      fullName:['',Validators.required],
      from:[null,Validators.required],
      to:[null,Validators.required],
      type:['',Validators.required],
      adults:[0,[Validators.required,Validators.max(10),Validators.pattern('[0-9]*$')]],
      departure:['',Validators.required],
      children:[0,[Validators.max(10),Validators.pattern('[0-9]*$')]],
      infants:[0,[Validators.max(10),Validators.pattern('[0-9]*$')]],
      arrival:['']

    })
  }

  ngOnInit(): void {
    this.getpage()
  }

  getpage(){
    this.flight=this.service.getPages()
  }
  onSubmit(A:Flight): void{
    if(A.from==A.to) return alert('Please try again!!')
    const YearsDeparture=A.departure.getFullYear()+543
    const YearsArrival=A.arrival.getFullYear()+543
    A.departure=new Date((A.departure.getMonth()+1)+"/"+A.departure.getDate()+"/"+YearsDeparture)
    A.arrival=new Date((A.arrival.getMonth()+1)+"/"+A.arrival.getDate()+"/"+YearsArrival)
    this.service.addflight(A)

  }
}
