import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SplitFullnamePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'splitFullname',
})
export class SplitFullnamePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, arg) {
    let names = value.split(' ');
    if(arg=='firstname'){
      return names[0]
    }else if(arg=='lastname'){
      return names[1]
    }else{
      return '';
    }
  }
}
