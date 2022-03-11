import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'constant'
})
export class ConstantPipe implements PipeTransform {
  constant: any
  transform(value: any) {
    this.constant = {
      P: 'Optional',
      S: 'Standrad'
    }
    return this.constant[value];
  }

}
