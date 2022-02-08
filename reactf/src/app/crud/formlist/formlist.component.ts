import { Component, OnInit } from '@angular/core';
import { Department, User } from '../Model/crud.model';
import { CrudserveService } from '../services/crudserve.service';

@Component({
  selector: 'app-formlist',
  templateUrl: './formlist.component.html',
  styleUrls: ['./formlist.component.css']
})
export class FormlistComponent implements OnInit {
  fromList: User[]
  department: Department[];
  searchText: string= "";
  constructor(private crudserveService:CrudserveService) { }

  ngOnInit(): void {
    this.getSubmitttedData();
    this.crudserveService.getdepartment().subscribe((data:Department[]) => {this.department = data});
  }

  getSubmitttedData(){
    this.crudserveService.getData().subscribe((res:any)=>{
    this.fromList= res
    })
  }
  deleteData(id:any){
    
    this.crudserveService.deleteData(id).subscribe((res :any)=>{ 
      this.getSubmitttedData();
    })
  }

}
