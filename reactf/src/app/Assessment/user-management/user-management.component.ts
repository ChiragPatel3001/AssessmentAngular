import { Component, OnInit } from '@angular/core';
import { client } from './User-Model/user.model';
import { UserManageService } from './User-Service/user-manage.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  Clients : client[]= [];
  constructor(private userservice: UserManageService) { }

  ngOnInit(): void {
  }
  getdata(){
    return this.userservice.getclients().subscribe(
      (cruddata: client[])=> 
      {
        this.Clients= cruddata;
      }
    )
  }
}
