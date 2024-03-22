import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProps'
})
export class FilterPropsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const filtered = {...value};
    args.forEach(arg => delete filtered[arg]);
    return filtered;
  }

}