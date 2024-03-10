import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix',
  standalone: true
})
export class PrefixPipe implements PipeTransform {

  transform(value: string, prefix: string = 'Default'): string {
    return `${prefix}: ${value}`;
  }

}
