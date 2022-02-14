import { Pipe, PipeTransform } from '@angular/core';
import { userDetails } from '../User-Model/user.model';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(clientdetails: userDetails[], searchText: string): userDetails[] {
    if (searchText === ""){
      return clientdetails;
    }
    return clientdetails.filter((data: userDetails) =>{
      return data.clients;
    })
  }

}
