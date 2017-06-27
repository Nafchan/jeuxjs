import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {PlanComponent} from './plan.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PlanComponent],
  exports: [PlanComponent]
})
export class PlanModule { }
