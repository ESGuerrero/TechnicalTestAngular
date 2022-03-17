import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Pipe({
  name: 'homeworld'
})
export class HomeworldPipe implements PipeTransform {
  
  
  constructor(private service: ApiService){}

  transform(value: string): Observable<string> {
    return this.service.getHomeworld(value);
  }  

}
