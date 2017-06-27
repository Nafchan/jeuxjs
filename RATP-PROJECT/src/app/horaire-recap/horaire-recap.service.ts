/**
 * Created by tamyfabius on 31/05/2017.
 */
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

@Injectable()

export class HoraireRecapService {

  private urlApi: string = 'https://api-ratp.pierre-grimaud.fr/v3/';

  constructor(private _http: Http) {
  }

  // permet de récupérer l'heur d'arriver et du prochain bus en fonction
  // de station et destination.
  getSchedulesByTypeCodeStationWay(station: any, destinationWay: any){
    return this._http
      .get(this.urlApi+"schedules/bus/108/"+station+"/"+destinationWay)
      .map(schedules => schedules.json())
      .catch(error => {
        let errorMessage = `Une erreur ${error.status} est survenue en tentant de joindre ${error.url}`;
        return Observable.throw(errorMessage);
      });
  }

}
