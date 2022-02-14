import { Pipe, PipeTransform } from '@angular/core';
import { client } from '../User-Model/user.model';
import { UserManageService } from '../User-Service/user-manage.service';

@Pipe({
  name: 'clientpipe'
})
export class ClientpipePipe implements PipeTransform {

  constructor(private userservice: UserManageService) {

  }
  transform(value: number, ...args: client[][]): any {
    return args[0]?.find(x => x.id == value)?.name;
  }
  }


