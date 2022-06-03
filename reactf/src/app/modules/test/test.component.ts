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
      },
      {
          'id': '5a15b13c663ea0af9ad0dae8',
          'index': 4,
          'isActive': false,
          'age': 25,
          'name': 'Mendoza Ruiz',
          'gender': 'male',
          'company': 'ZYTRAX',
          'email': 'mendozaruiz@zytrax.com',
          'phone': '+1 (904) 536-2020'
      },
      {
          'id': '5a15b13cc9eeb36511d65acf',
          'index': 5,
          'isActive': false,
          'age': 39,
          'name': 'Rosales Russell',
          'gender': 'male',
          'company': 'ELEMANTRA',
          'email': 'rosalesrussell@elemantra.com',
          'phone': '+1 (868) 473-3073'
      },
      {
          'id': '5a15b13c728cd3f43cc0fe8a',
          'index': 6,
          'isActive': true,
          'age': 32,
          'name': 'Marquez Nolan',
          'gender': 'male',
          'company': 'MIRACLIS',
          'disabled': false,
          'email': 'marqueznolan@miraclis.com',
          'phone': '+1 (853) 571-3921'
      },
      {
          'id': '5a15b13ca51b0aaf8a99c05a',
          'index': 7,
          'isActive': false,
          'age': 28,
          'name': 'Franklin James',
          'gender': 'male',
          'company': 'CAXT',
          'email': 'franklinjames@caxt.com',
          'phone': '+1 (868) 539-2984'
      },
      {
          'id': '5a15b13cc3b9381ffcb1d6f7',
          'index': 8,
          'isActive': false,
          'age': 24,
          'name': 'Elsa Bradley',
          'gender': 'female',
          'company': 'MATRIXITY',
          'email': 'elsabradley@matrixity.com',
          'phone': '+1 (994) 583-3850'
      },
      {
          'id': '5a15b13ce58cb6ff62c65164',
          'index': 9,
          'isActive': true,
          'age': 40,
          'name': 'Pearson Thompson',
          'gender': 'male',
          'company': 'EZENT',
          'email': 'pearsonthompson@ezent.com',
          'phone': '+1 (917) 537-2178'
      },
      {
          'id': '5a15b13c90b95eb68010c86e',
          'index': 10,
          'isActive': true,
          'age': 32,
          'name': 'Ina Pugh',
          'gender': 'female',
          'company': 'MANTRIX',
          'email': 'inapugh@mantrix.com',
          'phone': '+1 (917) 450-2372'
      },
      {
          'id': '5a15b13c2b1746e12788711f',
          'index': 11,
          'isActive': true,
          'age': 25,
          'name': 'Nguyen Elliott',
          'gender': 'male',
          'company': 'PORTALINE',
          'email': 'nguyenelliott@portaline.com',
          'phone': '+1 (905) 491-3377'
      },
      {
          'id': '5a15b13c605403381eec5019',
          'index': 12,
          'isActive': true,
          'age': 31,
          'name': 'Mills Barnett',
          'gender': 'male',
          'company': 'FARMEX',
          'email': 'millsbarnett@farmex.com',
          'phone': '+1 (882) 462-3986'
      },
      {
          'id': '5a15b13c67e2e6d1a3cd6ca5',
          'index': 13,
          'isActive': true,
          'age': 36,
          'name': 'Margaret Reynolds',
          'gender': 'female',
          'company': 'ROOFORIA',
          'email': 'margaretreynolds@rooforia.com',
          'phone': '+1 (935) 435-2345'
      },
      {
          'id': '5a15b13c947c836d177aa85c',
          'index': 14,
          'isActive': false,
          'age': 29,
          'name': 'Yvette Navarro',
          'gender': 'female',
          'company': 'KINETICA',
          'email': 'yvettenavarro@kinetica.com',
          'phone': '+1 (807) 485-3824'
      },
      {
          'id': '5a15b13c5dbbe61245c1fb73',
          'index': 15,
          'isActive': false,
          'age': 20,
          'name': 'Elisa Guzman',
          'gender': 'female',
          'company': 'KAGE',
          'email': 'elisaguzman@kage.com',
          'phone': '+1 (868) 594-2919'
      },
      {
          'id': '5a15b13c38fd49fefea8db80',
          'index': 16,
          'isActive': false,
          'age': 33,
          'name': 'Jodie Bowman',
          'gender': 'female',
          'company': 'EMTRAC',
          'email': 'jodiebowman@emtrac.com',
          'phone': '+1 (891) 565-2560'
      },
      {
          'id': '5a15b13c9680913c470eb8fd',
          'index': 17,
          'isActive': false,
          'age': 24,
          'name': 'Diann Booker',
          'gender': 'female',
          'company': 'LYRIA',
          'email': 'diannbooker@lyria.com',
          'phone': '+1 (830) 555-3209'
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