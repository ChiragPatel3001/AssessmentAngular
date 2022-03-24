import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { mvpclient } from '../mvp-demo-model';
import { MvpService } from '../mvp.service';

@Component({
  selector: 'app-mvp-clientlist-container',
  templateUrl: './mvp-clientlist-container.component.html',
  styleUrls: ['./mvp-clientlist-container.component.scss']
})
export class MvpClientlistContainerComponent implements OnInit {
  mvpclientlist$: Observable<mvpclient[]>
  constructor(private mvpService: MvpService) { 
    this.mvpclientlist$ = new Observable();
  }

  ngOnInit(): void {
    this.mvpclientlist$ = this.mvpService.getmvpClient();
  }
  delete(id: number){
    this.mvpService.mvpDelete(id).subscribe(()=>
    {alert("The data has been deleted")
    this.mvpclientlist$ = this.mvpService.getmvpClient();}
    );
  }
}
