import {Component, Input, OnInit, ApplicationRef, OnChanges} from '@angular/core';
import {MapService} from './map.service';
import {MapMarkerInterface} from './map-marker.insterface';

@Component({
  moduleId: module.id,
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit,  OnChanges {

  @Input () stationAddress: any;
  lat: number =  48.8167;
  lng: number = 2.5167;
  zoom: number = 11;
  markers: MapMarkerInterface[] = [];

  constructor(private _mapService: MapService, private _applicationRef: ApplicationRef) { }


  ngOnInit() {
    this.geocodeStation();
  }

  ngOnChanges() {
    this.geocodeStation();
  }

  /* permet de récupérer la latitude et la longitude d'une adresse */
  placeMarkerOnGeocodedPlace(location: any) {
    let marker = {
      lat: location.geometry.location.lat(),
      lng: location.geometry.location.lng(),
      title: ''
    };


    this.lat = location.geometry.location.lat();
    this.lng = location.geometry.location.lng();

    // mettre les résultats dans le tableau markers
    this.markers.push(marker);

    this._applicationRef.tick();
  }

  // permet d'envoyer la data station vers le service.
  geocodeStation() {
    this._mapService
      .getLatLng(this.stationAddress)
      .subscribe(
        (data: any) => this.placeMarkerOnGeocodedPlace(data),
        (err: any) => console.error(err),
      );
  }

}

