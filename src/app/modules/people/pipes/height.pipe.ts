import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height'
})
export class HeightPipe implements PipeTransform {

  transform(value: number): string {
    if (value > 200) {
      return 'High';
    } else if(value >=100 && value <= 200){
      return 'Normal'; 
    }
    return 'Low';
  }
}
