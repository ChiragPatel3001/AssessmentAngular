import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';
import { SubjectData } from '../subjectcom.model';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {
  searchText: string;
  subjectList: SubjectData[] = [];
  idToEdit: number | null;
  constructor(private _subjectService: SubjectService) { }

  ngOnInit(): void {
    this._subjectService.saveData$.subscribe((r) => {
      if(this.idToEdit){
        this.editData(this.idToEdit, r);
        this.idToEdit= null;
      } else{
        this.addData(r);
      }
    });
  }

  addData(r: SubjectData) {
    let newId = 1;
    if (this.subjectList.length) {
      newId = this.subjectList[this.subjectList.length - 1].id + 1;
    }
    this.subjectList.push({...r, id: newId});
  }

  editData(id: number, r: SubjectData){
    this.subjectList[this.subjectList.findIndex(dd => dd.id == id)] = {...r, id: id};
  }

  sendDataToEdit(subjectData: SubjectData) {
    this._subjectService.sendData(subjectData);
    this.idToEdit = subjectData.id;
  }

  deleteData(id: number) {
    this.subjectList.splice(this.subjectList.findIndex(dd => dd.id == id), 1);
  }
}