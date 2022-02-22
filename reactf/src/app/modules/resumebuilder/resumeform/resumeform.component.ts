import { Component, OnInit } from '@angular/core';
import { ResumeserviceService } from '../Services/resumeservice.service';
import { FormGroup, FormControl, FormArray, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { resumedetails } from '../Resume-Model/resume.model';


@Component({
  selector: 'app-resumeform',
  templateUrl: './resumeform.component.html',
  styleUrls: ['./resumeform.component.scss']
})
export class ResumeformComponent implements OnInit {
  resumeform: FormGroup;
  resumeSubmitted= false;

  constructor(private resume: ResumeserviceService, private fb: FormBuilder,private route: Router) {}

  ngOnInit(): void {
    this.buildResumeForm();
  }

  buildResumeForm() {
    const emailRegex='^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    this.resumeform = this.fb.group({
        firstName : ['',Validators.required],
        designation : ['',Validators.required],
        contact : ['',Validators.required],
        email : ['',[Validators.required,Validators.email,Validators.pattern(emailRegex)]],
        profiledesc : ['',Validators.required],
        techskills : this.fb.array([this.techSkills()]),
        experience : this.fb.array([this.experienceInfo()]),
        education : this.fb.array([this.educationInfo()]),
    });

  }
  

  get getvalue() {
    return this.resumeform.controls;
  }
// techSkills

techSkills(): FormGroup {
  return this.fb.group({
    techskills: ['', Validators.required],
  });
}

get technicalskill() {
  return this.getvalue['techskills'] as FormArray;
}

addSkills() {
  this.technicalskill.push(this.techSkills());
}

deleteSkills(index: number) {
  if (this.technicalskill.length != 1) {
    this.technicalskill.removeAt(index);
  }
  console.log(this.technicalskill.length);
}

getAsFormGroup(ac: AbstractControl): FormGroup {
  return ac as FormGroup;
}


// experience

experienceInfo():FormGroup {
  return this.fb.group({
  WorkplaceInfo : ['',Validators.required],
  designationInfo : ['',Validators.required],
  descriptionInfo : ['',Validators.required],
  startYearinfo: ['',Validators.required],
  EndYearinfo: ['',Validators.required],
  aboutExp: ['',Validators.required]
});
}
  get experience(){
    return this.getvalue['experience'] as FormArray;
  }

  addExp() {
    this.experience.push(this.experienceInfo());
  }
  
  deleteExp(index: number) {
    if (this.experience.length != 1) {
      this.experience.removeAt(index);
    }
    console.log(this.experience.length);
  }

  getAsExpGroup(exp: AbstractControl): FormGroup {
    return exp as FormGroup;
  }
  
//education

educationInfo() : FormGroup{
  return this.fb.group({
    UniversityInfo : ['',Validators.required],
    degree : ['',Validators.required],
    grade : ['',Validators.required],
  })
}
get education(){
  return this.getvalue['education'] as FormArray;
}

addEducation() {
  this.education.push(this.educationInfo());
}

deleteEducation(index: number) {
  if (this.education.length != 1) {
    this.education.removeAt(index);
  }
  console.log(this.education.length);
}
getAsEduGroup(edu: AbstractControl): FormGroup {
  return edu as FormGroup;
}

onSubmit() {
  this.resume.deleteResumeData(1).subscribe(()=>{
    this.resume.saveResumeData(this.resumeform.value).subscribe(data => {
      this.route.navigate(['/resume/view']);
    });
  })
  console.log(this.resumeform.value);
  
}


}
           