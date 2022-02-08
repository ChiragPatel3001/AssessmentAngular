import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../Model/crud.model';

@Pipe({
  name: 'formcrudfilter'
})
export class FormcrudfilterPipe implements PipeTransform {

  transform(user: User[], searchText: string): User[] {
    if (searchText === ""){
      return user;
    }
    return user.filter((data: User) =>{
      return data.firstname.toLowerCase().match(searchText.toLowerCase())
    })
  }

}
