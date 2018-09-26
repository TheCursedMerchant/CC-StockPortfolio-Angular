import { Component, OnInit } from '@angular/core';
import { UserSettingsFormData } from '../../models/userSettingsFormData';
import { UserSettingsServicesService } from '../../services/user-settings-services.service';
import { User } from '../../models/user';
import { LocalStorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  userN:string;
  oldPassW:string;
  newPassW:string;
  confirmPassW:string;
  public userSettingsFormData: UserSettingsFormData;
  public user:User;

  //inject your service to instantiate it. make it private singleton
  constructor( private localStorageService:LocalStorageService,
               private userSettingsService:UserSettingsServicesService ) { }
  ngOnInit() {
    if(this.localStorageService.getSaved("username") === null)
      window.location.replace("login");
  }

  updateSettings(){
    console.log("hey");
    this.userSettingsFormData = 
        new UserSettingsFormData(this.userN, this.oldPassW, this.newPassW, this.confirmPassW);
    this.userSettingsService.postFormData(this.userSettingsFormData)
      .subscribe(usr => {
        this.user = usr;
        console.log(this.user);
      });
  }
}
