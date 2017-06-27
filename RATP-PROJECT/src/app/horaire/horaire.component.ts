import { Component, OnInit } from '@angular/core';
import {HoraireService} from './horaire.service';

@Component({
  moduleId: module.id,
  selector: 'app-horaire',
  templateUrl: 'horaire.component.html',
  styleUrls: ['horaire.component.css']
})
export class HoraireComponent implements OnInit {
  stations:     Array<any> = [];
  destination:  Array<any> = [];
  dataDestId:   any = '';
  dataDestName: any = '';
  dataStatName: any = '';

  constructor(private _horaireService: HoraireService) { }

  ngOnInit() {
    this.getListsStations();
    this.getDestination();
  }

  /* récupère la liste des stations */
  getListsStations(){
    this._horaireService.getStationsByTypeCode().subscribe(result => this.stations = result.result);
  }

  /* permet de retourner la liste des destination */
  getDestination() {
    this._horaireService
      .getDestinationsByTypeCode()
      .subscribe(result => this.destination = result.result.destinations);
  }

  /* retourner la valeur et l'id de la destination choisit*/
  getDest(event){
    this.dataDestName = event.target.value;
    this.dataDestId   = event.target.id;
  }
}
