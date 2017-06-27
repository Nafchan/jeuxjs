/**
 * Created by tamyfabius on 31/05/2017.
 */
import {Component, Input, OnInit} from '@angular/core';
import {HoraireRecapService} from './horaire-recap.service';
import {TypeHoraireInterface} from './type-horaire.interface';

@Component({
  moduleId: module.id,
  selector: 'horaire-recap',
  templateUrl: 'horaire-recap.component.html',
  styleUrls: ['horaire-recap.component.css']
})
export class HoraireRecapComponent implements OnInit {

  @Input() stationChild: any;
  @Input() destinationChild: any;
  @Input() destinationIdChild: any;
  @Input() stationsListChild: any[];
  @Input() lesDestinations:any[];

  stationRetour: any;
  addressStation: any = '';
  addressStaion = this.stationChild;

  showDrop:     boolean = true;
  displayList:  string;
  valueListe:   any;
  dataHoraire:  TypeHoraireInterface[];
  horaireArriver: any;
  horaireProchain: any;
  newStation: any;
  constructor(private _horaireRecapService: HoraireRecapService) { }

  ngOnInit() {
    this.displayList = 'none';
  }

  ngAfterViewInit() {
    this.getSchedules(this.stationChild, this.destinationIdChild);
  }

  ngOnChanges() {
    this.getSchedules(this.stationChild, this.destinationIdChild);
  }

  /********************************************/
  /*  Fonction qui permet de de masquer ou    */
  /*  d'afficher la liste des stations        */
  /********************************************/
  displayListStation(){
    this.showDrop    = !this.showDrop;
    this.displayList = this.showDrop ? 'block' : 'none';
  }

  /********************************************/
  /*  Fonction qui permet de retourner        */
  /*  la vaeur du station choisie dans la     */
  /*  et d'afficher l'heure d'arriver et du   */
  /*  du prochain bus                         */
  /********************************************/
  getValueList(event?: any){
    this.valueListe = event;
    this.stationChild = this.valueListe;
    this.getSchedules(this.stationChild, this.destinationIdChild);
  }

  /********************************************/
  /*  Fonction qui permet de retourner        */
  /*  l'heure d'arriver et le prochain heure  */
  /********************************************/
  getSchedules(param1: any, param2: any){
    this._horaireRecapService
      .getSchedulesByTypeCodeStationWay(param1, param2)
      .subscribe(result => {
        this.dataHoraire = result.result.schedules;
        this.horaireArriver = this.dataHoraire[0].message;
        this.horaireProchain = this.dataHoraire[1].message;
      });
  }

}
