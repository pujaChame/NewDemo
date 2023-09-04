import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe1'
})
export class Pipe1Pipe implements PipeTransform {

  transform(value: any , ...date: any): any {
 //  console.log("Its Custom Pipe transform Method " +value);
    return value;
  }

}
