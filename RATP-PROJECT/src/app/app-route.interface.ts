/**
 * Created by tamyfabius and nafissa on 31/05/2017.
 */

import {Type} from '@angular/core';

/* Interface ROUTE : Type */
export interface AppRouteInterface{
  path?: string;
  component?: Type<any>;
  pathMatch?: string;
  redirectTo?: string;
}
