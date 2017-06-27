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

export class HoraireService {

  private urlApi: string = 'https://api-ratp.pierre-grimaud.fr/v3/';

  constructor(private _http: Http) {}

  getDestinationsByTypeCode(){
    return this._http
      .get(this.urlApi+"destinations/bus/108")
      .map(destinations => destinations.json())
      .catch(error => {
        let errorMessage = `Une erreur ${error.status} est survenue en tentant de joindre ${error.url}`;
        return Observable.throw(errorMessage);
      });
  }

  getStationsByTypeCode(){
    return this._http
      .get(this.urlApi + 'stations/bus/108')
      .map(stations => stations.json())
      .catch(error => {
        let errorMessage = `Une erreur ${error.status} est survenue en tentant de joindre ${error.url}`;
        return Observable.throw(errorMessage);
      });
  }
}
