import { Component, OnInit, Input } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit {
  // on récupère l'url en cours
  @Input() currentUrl: any;

  urlPlan: string = '/plan';
  urlHoraire: string = '/horaire';
  urlContact: string = '/contact';

  constructor() { }

  ngOnInit() {

  }


}
