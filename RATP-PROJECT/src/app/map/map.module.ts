import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { MapComponent } from './map.component';
import { MapService } from './map.service';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBPlDuNK9jYZ2JVX_ASsLmpY2OJ_pLXIW4'
    })
  ],
  declarations: [MapComponent],
  exports: [MapComponent],
  providers: [MapService]
})
export class MapModule { }
