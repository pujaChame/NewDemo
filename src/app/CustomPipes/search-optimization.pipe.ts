import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchOptimization'
})
export class SearchOptimizationPipe implements PipeTransform {

  transform(value: any, gender:string): any {
    
    if(gender==='Female')
    {
      value="Miss ." +value;
    }
    if(gender==='Male'){
      value="Mr. "+value;
    }
    return value;
  }

}
