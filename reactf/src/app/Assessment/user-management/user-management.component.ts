import { Component, OnInit } from '@angular/core';
import { client } from './User-Model/user.model';
import { UserManageService } from './User-Service/user-manage.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  Clients : client[]= [];
  formView : Boolean= false;
  constructor(private userservice: UserManageService) {
    this.getClient();
   }

  ngOnInit(): void {
    
  }
  getClient(){
    return this.userservice.getclients().subscribe(
      (cruddata: client[])=> 
      {
        this.Clients= cruddata;
      }
    )
  }
  newUser(){
    this.formView = !this.formView;
    console.log(this.formView)
  }
  
}
