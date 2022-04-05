import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { client, userDetails } from '../User-Model/user.model';
import { UserManageService } from '../User-Service/user-manage.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  UserList: userDetails[];
  UserList2: userDetails[] = [];
  Clients: client[] = [];
  formView: Boolean = false;
  constructor(private _userservice: UserManageService) { }

  ngOnInit(): void {
    this.getSubmittedClientData();
    this._userservice.getclients().subscribe((data: client[]) => { this.Clients = data; });
    this.updatedList(); 
    this._userservice.getEdittedData().subscribe((res : userDetails)=>{
      let temp = this.UserList2.findIndex((user) => {
        return user.id === res.id;
      });
      console.log(temp)
      if (temp !== -1) {
        this.UserList2[temp] = res;
      } else {
        this.UserList2.push(res);
      }
    });
  }
  getSubmittedClientData() {
    this._userservice.getClientData().subscribe((res: any) => {
      this.UserList = res;
    });
  }
  deleteClientData(id: any) {

    this._userservice.deleteClientData(id).subscribe((res: any) => {
      this.getSubmittedClientData();
    });
  }

  updatedList(){
    this._userservice.getListUpdateStatus().subscribe(status=>{
      if (status){
        this.getSubmittedClientData();
      }
    });
  }

  getClientToEdit(id: number){
    this._userservice.getClientId(id).subscribe(data =>{

    });
  }
  editData(user:userDetails){
    this._userservice.sendDataToEdit(user);
    // return !this.formView;
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.UserList, event.previousIndex, event.currentIndex);
  }


}
