import { Campany } from './models/Campany';
import { User } from './models/Users';
/// <reference types="@types/google.maps" />

import { CustomerMaps } from './models/customerMaps';

 const customerMap = new CustomerMaps("maps");

 const user = new User();

 const campany = new Campany()

 
 customerMap.addMarker(user)
 customerMap.addMarker(campany);


  
 const myUser:User ={
  name: "sahra",
  location:{
    lat:  59.334591,
    lng:18.063240,
    country: "Sweden"
  }
}
const person:User = {
  name: "Tube B",
  location:{
    lat: 59.334591,
    lng:18.063240,
    country: "Sweden"
  }

}
customerMap.addMarker(myUser);
customerMap.addMarker(person);