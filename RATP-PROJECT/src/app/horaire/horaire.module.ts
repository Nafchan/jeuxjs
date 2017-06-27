import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {HoraireRecapModule} from '../horaire-recap/horaire-recap.module';

import {HoraireComponent} from './horaire.component';
import {HoraireService} from './horaire.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    HoraireRecapModule
  ],
  declarations: [HoraireComponent],
  exports: [HoraireComponent],
  providers: [HoraireService]
})
export class HoraireModule { }
