import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {AccueilComponent} from './accueil.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AccueilComponent],
  exports: [AccueilComponent]
})
export class AccueilModule { }
