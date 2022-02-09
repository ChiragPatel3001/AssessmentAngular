import { Component, OnInit } from '@angular/core';
import { resumedetails } from '../Resume-Model/resume.model';
import { ResumeserviceService } from '../Services/resumeservice.service';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.css']
})
export class ResumeViewComponent implements OnInit {

  resumeDetail : resumedetails;

  constructor(private resumedetails: ResumeserviceService) { }

  ngOnInit(): void {
    this.resumedetails.getResumeinfo(1).subscribe(data => {
      this.resumeDetail = data
    })
  }

}
