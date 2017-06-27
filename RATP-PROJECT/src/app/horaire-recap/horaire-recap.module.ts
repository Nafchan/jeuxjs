/**
 * Created by tamyfabius on 31/05/2017.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MapModule } from '../map/map.module';

import {HoraireRecapComponent} from './horaire-recap.component';
import {HoraireRecapService} from './horaire-recap.service';
import {ReversePipe} from './reverse.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MapModule
  ],
  declarations: [HoraireRecapComponent, ReversePipe],
  exports: [HoraireRecapComponent],
  providers: [HoraireRecapService]
})
export class HoraireRecapModule { }
