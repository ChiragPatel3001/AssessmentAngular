import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserManageService } from '../User-Service/user-manage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { client, userDetails } from '../User-Model/user.model';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  @Input() enabled: Boolean;
  userForm: FormGroup;
  submitted = false;
  clientDataSubmitted: false;
  id: number;
  Clients: client[] = [];
  isAddMode: boolean = false;

  // @Output() submit: EventEmitter = new EventEmitter();

  constructor(private _userManageService: UserManageService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.getClient();
    this.userForm = this.userdata();
  }

  ngOnInit(): void {
    this.getClient();
    this._userManageService.getDataToEdit().subscribe((res) => {
      this.id = res.id;
      this.userForm.patchValue(res);
      this.isAddMode = !this.id;
    });

    // if (!this.isAddMode) {
    //   debugger
    //   this._userManageService.getClientId(this.id)
    //     .subscribe(x => this.userForm.patchValue(x));
    // }

  }
  userdata(): FormGroup {
    const emailregex = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email, Validators.pattern(emailregex)]],
      contactno: ['', [Validators.maxLength(10), Validators.required, Validators.minLength(10)]],
      clients: ['1'],
      office: ['', Validators.required]
    })
  }
  get f() { return this.userForm.controls; }


  getClient() {
    return this._userManageService.getclients().subscribe(
      (clientdata: client[]) => {
        this.Clients = clientdata;
        console.log(this.Clients)
      }
    )
  }


  updateClient() {
    this._userManageService.editClientData(this.id, this.userForm.value).subscribe((res: userDetails) => {
      console.log('Client Updated')
      this._userManageService.sendEdittedData(res);
    })
  }

  submitClientData() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    this._userManageService.addClientData(this.userForm.value).subscribe((res: userDetails) => {
    })
  }
  onSubmit() {
    if (this.isAddMode) {
      this.submitClientData();
    } else {
      this.updateClient();
    }
    this._userManageService.listUpdated();
  }
  reset() {
    this.userForm.reset();
  }



}


