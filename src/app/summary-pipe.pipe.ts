import { Pipe, PipeTransform } from '@angular/core'; 

@Pipe({
  name: 'summary' 
})
export class SummaryPipePipe implements PipeTransform {

  transform(value: string, limit?: number): any {
    
    let actualLimit = (limit) ? limit : 50;

    return value.substr(0, actualLimit) + "..."

  }

}
