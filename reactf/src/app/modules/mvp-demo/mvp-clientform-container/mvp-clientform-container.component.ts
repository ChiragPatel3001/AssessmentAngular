import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { mvpclient } from '../mvp-demo-model';
import { MvpService } from '../mvp.service';

@Component({
  selector: 'app-mvp-clientform-container',
  templateUrl: './mvp-clientform-container.component.html',
  styleUrls: ['./mvp-clientform-container.component.scss']
})
export class MvpClientformContainerComponent implements OnInit {
  public id!: string;
  public editmvpClient$ : Observable<mvpclient>
  constructor(private mvpservice: MvpService, private router: Router, private activated: ActivatedRoute) { 
    this.id = this.activated.snapshot.params['id'];
    if(this.id){
      this.editmvpClient$ = this.mvpservice.getmvpclientbyId(this.id);
    }
  }

  ngOnInit(): void {

  }
  public submitData(mvpclient: mvpclient) {
    this.mvpservice.saveData(mvpclient).subscribe(
      (res: any) => {
      alert('Post Success');
      this.router.navigateByUrl("mvp/mvp-list")
    })
  }
  public edittedData(mvpclient: mvpclient){
    this.mvpservice.edditedData(mvpclient,this.id).subscribe((res:any)=>
    {
      alert('Edit Success');
      this.router.navigateByUrl("mvp/mvp-list")
    }
    )
  }
}
