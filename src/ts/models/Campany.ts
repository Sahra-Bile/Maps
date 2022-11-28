import { faker } from "@faker-js/faker";
import { Mappable } from './Mappable';

export class Campany implements Mappable{
  campnayName: string;
  catchphrase: string;
  location:{
    lat: number;
    lng: number;
    country: string
  };
  constructor(){
    this.campnayName = faker.company.name(); 
    this.catchphrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
      country: faker.address.country()
    }
  }


}