import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department, User } from '../Model/crud.model';
import { CrudserveService } from '../services/crudserve.service';



@Component({
  selector: 'app-formcrud',
  templateUrl: './formcrud.component.html',
  styleUrls: ['./formcrud.component.css']
})
export class FormcrudComponent implements OnInit {

  FormValue: FormGroup;
  submitted= false;
  id: number;
  isAddMode: boolean= false;
  department: Department[]= [];
  constructor(private bob: FormBuilder, private crudserveService:CrudserveService, private router:Router, private route: ActivatedRoute ) { 
    this.FormValue = this.maarufunction();
  }

  ngOnInit(): void {
    this.getdata();
    
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    
    if (!this.isAddMode) {
      debugger
      this.crudserveService.getId(this.id)
          .subscribe(x => this.FormValue.patchValue(x));
  }
  }
  maarufunction(): FormGroup{
     return this.bob.group({
      firstname : ['',Validators.required],  
      lastname : ['',Validators.required],
      email : ['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      contact : ['',[Validators.maxLength(10),Validators.required,Validators.minLength(10)]],
      gender : ['',Validators.required],
      doe : [''],
      dept : ['FrontEnd'],
     }
     )
  }


  get f() { return this.FormValue.controls; }

  getdata(){
    return this.crudserveService.getdepartment().subscribe(
      (cruddata: Department[])=> 
      {
        this.department= cruddata;
      }
    )
  }
  submitData(){
    this.submitted = true;
    if (this.FormValue.invalid) {
      return;
  }
      this.crudserveService.addData(this.FormValue.value).subscribe((res:User)=>{
        this.router.navigate(['/crud/list']);
        
      })
  }

  updateUser(){
    this.crudserveService.editData(this.id,this.FormValue.value).subscribe((res:User)=>{
      console.log( 'User Updated')
      this.router.navigate(['/crud/list']);
    })
  }

  onSubmit(){
    if (this.isAddMode) {
      this.submitData();
  } else {
      this.updateUser();
  }
  }
}
