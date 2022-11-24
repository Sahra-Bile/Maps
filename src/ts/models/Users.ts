import { faker } from "@faker-js/faker";

export class User{
  name: string;
 location: {
    lat: number;
    lng: number;
    country: string;
  };
  constructor(){
  this.name = faker.name.firstName(); 
  this.location = {
    lat: parseFloat(faker.address.latitude()), //! konverarar string till number
    lng: parseFloat(faker.address.longitude()),
    country: faker.address.country()
  }
}
}