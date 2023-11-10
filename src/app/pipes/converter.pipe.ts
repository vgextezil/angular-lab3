import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {

  // @ts-ignore
  transform(value: number, ...args: unknown[]): unknown {
    if(value < 1000000){
      value = value/1000;
      return value.toFixed(2) + 'K';
    }
    else if(value >= 1000000 && value < 1000000000){
      return (value/1000000).toFixed(2) + 'M';
    }
    else if(value >= 1000000000 && value < 1000000000000){
      return (value/1000000000).toFixed(2) + 'B';
    }
  }

}
