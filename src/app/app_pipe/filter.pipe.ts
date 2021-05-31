import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    // if(value.lengthv ===1){
    //   return value
    // }
    return value.filter(function(nameSearch){
      return nameSearch.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    });
  }

}
