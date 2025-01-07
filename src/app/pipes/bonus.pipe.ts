import { Pipe, PipeTransform } from '@angular/core';
import { ValueChangeEvent } from '@angular/forms';

@Pipe({
  name: 'bonus'
})
export class BonusPipe implements PipeTransform {

  transform(value: number, designation:string):number {
    if(designation=='software developer'){
      return value*0.25;
    }
    else if(designation=='software tester'){
      return value*0.20;
    }
    else if(designation=='Project Manager'){
      return value*0.49;
    }
    else if(designation=='Team lead'){
      return value*0.45;
    }
    //
    return value;
  }

}
