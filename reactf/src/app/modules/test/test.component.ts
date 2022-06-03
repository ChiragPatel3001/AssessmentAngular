import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Person } from './data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  people: Person[] = [];
  selectedPeople = [];
  listArray : string[] = [];
  sum = 20;
  direction = "";
  public firstForm:FormGroup;
  public secondForm:FormGroup;
  public thirdForm: FormGroup;
  public isSecondForm:boolean = false;
  public isFirstFormCompleted:boolean = false;
  public isSecondCompleted:boolean = false;
  public isthirdForm:boolean = false;
  constructor(private fb:FormBuilder) { 
    this.appendItems();
  }

  ngOnInit(): void {
    this.firstForm    = this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required]
    })
    this.secondForm = this.fb.group({
      email:['',Validators.required],
      address:['',Validators.required]
    })
    this.thirdForm = this.fb.group({
      position:['',Validators.required],
    })

    this.people =
    [
      {
          'id': '5a15b13c36e7a7f00cf0d7cb',
          'index': 2,
          'isActive': true,
          'age': 23,
          'name': 'Karyn Wright',
          'gender': 'female',
          'company': 'ZOLAR',
          'email': 'karynwright@zolar.com',
          'phone': '+1 (851) 583-2547'
      },
      {
          'id': '5a15b13c2340978ec3d2c0ea',
          'index': 3,
          'isActive': false,
          'age': 35,
          'name': 'Rochelle Estes',
          'disabled': false,
          'gender': 'female',
          'company': 'EXTRAWEAR',
          'email': 'rochelleestes@extrawear.com',
          'phone': '+1 (849) 408-2029'
      }
  ]
}
onScrollDown(ev: any) {
    console.log("scrolled down!!", ev);

    this.sum += 20;
    this.appendItems();
    
    this.direction = "scroll down";
  }

  onScrollUp(ev: any) {
    console.log("scrolled up!", ev);
    this.sum += 20;
    this.prependItems();

    this.direction = "scroll up";
  }

  appendItems() {
    this.addItems("push");
  }

  prependItems() {
    this.addItems("unshift");
  }

  addItems(_method: string) {
    for (let i = 0; i < this.sum; ++i) {
      if( _method === 'push'){
        this.listArray.push([i].join(""));
      }else if( _method === 'unshift'){
        this.listArray.unshift([i].join(""));
      }
    }
  }

  public onSubmit(){
    if(this.firstForm.valid){
      this.isSecondForm = true;
      this.isFirstFormCompleted = true;
    }
    else{
      alert("enter valid details");
    }
    if(this.isSecondForm && this.secondForm.valid){
      this.isSecondForm = false;
      this.isthirdForm = true;
      this.isSecondCompleted = true;
    }
  }
  public onPrevious(){
    if(this.isSecondForm){
      this.isSecondForm = !this.secondForm;
      this.isSecondCompleted = false;
      this.isFirstFormCompleted = false;
      this.secondForm.reset();
    }
   else if(this.isthirdForm){
      this.isSecondForm = true;
      this.isthirdForm = false;
      this.isSecondCompleted = false;
      this.thirdForm.reset();
   }
  }

  
}
