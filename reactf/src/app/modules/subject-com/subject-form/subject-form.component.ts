import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.scss']
})
export class SubjectFormComponent implements OnInit {
  FormValue: FormGroup;
  constructor(private _subjectService: SubjectService, private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.FormValue = this._fb.group({
      name: [''],
      email: [''],
      gender: [''],
    });

    this._subjectService.editData$.subscribe((res)=>
    {
      this.FormValue.patchValue(res);
    }
    )
  }
  onSubmit(){
    this._subjectService.onSubmit(this.FormValue.value);
    this.FormValue.reset();
  }
}
