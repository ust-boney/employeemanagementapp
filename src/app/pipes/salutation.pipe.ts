import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(value: string, empGender:string):string  {
    if(empGender== 'Male'){
      return 'Mr.'+value;
    }
    else{
      return 'Ms.'+value;
    }
    
  }

}
