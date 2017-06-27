import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit{
  /* declaration des variable */
  urlCurrent: any;

  constructor(private _router: Router) {}

  /* Récupere l'url pendant le chargement de la page */
  ngOnInit() {
    this.getUrlCurrent();
  }

  /* Récuperer l'url en cours */
  getUrlCurrent(){
    this._router.events.subscribe((url: any) => {
      this.urlCurrent = url.url ;
    });
  }
}
