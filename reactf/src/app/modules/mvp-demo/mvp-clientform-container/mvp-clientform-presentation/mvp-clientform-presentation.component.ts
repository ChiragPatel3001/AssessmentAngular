import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mvpclient } from '../../mvp-demo-model';
import { MvpClientformPresenterService } from '../mvp-clientform-presenter/mvp-clientform-presenter.service';

@Component({
  selector: 'app-mvp-clientform-presentation',
  templateUrl: './mvp-clientform-presentation.component.html',
  styleUrls: ['./mvp-clientform-presentation.component.scss']
})
export class MvpClientformPresentationComponent implements OnInit {
  mode: string;
  mvpForm: FormGroup;
  private _formData: mvpclient;

  @Input() public set editmvpClient(value: mvpclient | null) {
    if(value){
      this.mode = "Edit User";
      this.mvpForm.patchValue(value);
      this._formData= value;
    }
  }
  @Output() public submitData: EventEmitter<mvpclient>;
  @Output() public edittedData: EventEmitter<mvpclient>;
  constructor(private formpresenter: MvpClientformPresenterService, private fb: FormBuilder) {
    this.mode = "Add User";
    this.submitData = new EventEmitter;
    this.edittedData = new EventEmitter;
   }

  ngOnInit(): void {
    this.mvpForm = this.fb.group(
      {
        name: ['', Validators.required],
        age: ['',Validators.required],
        gender: ['',Validators.required],
      }
    )
    this.formpresenter.mvpform$.subscribe((res: mvpclient)=>
    {
      if(this.mode === "Add User"){
        this.submitData.emit(res)
      }
      else{
        this.edittedData.emit(res)
      }
    })
  }
 public onSubmit(){
    this.formpresenter.onsubmit(this.mvpForm)
  }

}
