import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cstPipe'
})
export class CstPipePipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [price]=args
    return value*price;
  }

}
