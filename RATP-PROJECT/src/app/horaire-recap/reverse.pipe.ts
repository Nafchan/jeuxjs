/**
 * Created by tamyfabius on 31/05/2017.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversePipe'
})

// inverse le résultat d'un tableau
export class ReversePipe implements PipeTransform{
  transform(value) {
    return value.slice().reverse();
  }
}
