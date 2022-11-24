/// <reference types="@types/google.maps" />

interface Mappable {
  location:{
    lat: number,
    lng: number
  }
}


export class CustomerMaps {
  private googleMap: google.maps.Map;
  
  constructor(divId:string){
    this.googleMap = new google.maps.Map(document.getElementById(divId)  as HTMLDivElement,{
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }
  addMarker(mappable:Mappable):void{

     const marker =new google.maps.Marker({
      map: this.googleMap,
      position:{
        lat: mappable.location.lat,
        lng: mappable.location.lng
        
      }
    });

   marker.addListener("click", ()=>{
    const infoWindow = new google.maps.InfoWindow({
      content: "tjenare!"
    });
    infoWindow.open(this.googleMap, marker);
   });

  }

}
