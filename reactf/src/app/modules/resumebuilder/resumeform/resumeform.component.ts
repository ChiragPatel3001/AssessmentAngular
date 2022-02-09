import { Component, OnInit } from '@angular/core';
import { ResumeserviceService } from '../Services/resumeservice.service';

@Component({
  selector: 'app-resumeform',
  templateUrl: './resumeform.component.html',
  styleUrls: ['./resumeform.component.css']
})
export class ResumeformComponent implements OnInit {

  constructor(private resume : ResumeserviceService) { }

  ngOnInit(): void {
  }

}
