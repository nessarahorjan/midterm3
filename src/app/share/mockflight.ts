import { Flight } from "../component/flight/data";

export class Mockflight {
  public static mockflight:Flight[]=[{
    fullName:'Kimz',
    from:'Bangkok',
    to:'Suratthani',
    type:'Return',
    adults:1,
    departure:new Date('05-13-2565'),
    children:1,
    infants:1,
    arrival:new Date('05-14-2565')
  }]

}
