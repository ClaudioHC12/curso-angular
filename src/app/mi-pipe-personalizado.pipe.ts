import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipePersonalizado',
  standalone: true
})
export class MiPipePersonalizadoPipe implements PipeTransform {

  transform(valor?:string): string {
    return valor?.toUpperCase() || '';
  }

}
