import { Component, OnInit } from '@angular/core';
import { client, userDetails } from '../User-Model/user.model';
import { UserManageService } from '../User-Service/user-manage.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  UserList: userDetails[];
  Clients : client[]= [];
  formView : Boolean=false;
  constructor(private _userservice: UserManageService) { }

  ngOnInit(): void {
    this.getSubmittedClientData();
    this._userservice.getclients().subscribe((data:client[]) => {this.Clients = data});

  }
  getSubmittedClientData(){
    this._userservice.getClientData().subscribe((res:any)=>{
    this.UserList= res
    })
  }
  deleteClientData(id:any){
    
    this._userservice.deleteClientData(id).subscribe((res :any)=>{ 
      this.getSubmittedClientData();
    })
  }
  newUser(){
    this.formView = true;
  }

}
