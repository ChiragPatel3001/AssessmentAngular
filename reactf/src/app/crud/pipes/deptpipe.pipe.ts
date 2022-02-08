import { Pipe, PipeTransform } from '@angular/core';
// import { Observable } from 'rxjs';
import { Department } from '../Model/crud.model';
import { CrudserveService } from '../services/crudserve.service';

@Pipe({
  name: 'deptpipe'
})
export class DeptpipePipe implements PipeTransform {

  constructor(private crudService: CrudserveService) {

  }
  transform(value: number, ...args: Department[][]): any {
    return args[0]?.find(x => x.id == value)?.name;
  }

}
