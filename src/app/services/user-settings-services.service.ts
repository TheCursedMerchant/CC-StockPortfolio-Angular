import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from '../../../node_modules/rxjs';
import { UserSettingsFormData } from '../models/userSettingsFormData';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsServicesService {

  url: string = "localhost:8080/settings";
  constructor(private httpClient:HttpClient) { } //constructor injection our httpclient

  //observable post function
  postFormData(formData:UserSettingsFormData) : Observable<User> {
    const headers = new HttpHeaders().set("content-type", "application/json");
    //must be named "headers" else problems during return
    let body = 
    { 
      username: formData.username,
      oldPassword: formData.oldPassword,
      newPassword: formData.newPassword,
      confirmPassword: formData.confirmPassword
    };
    return this.httpClient.post<User>(this.url, body, {headers});
                            //maybe UserSettingsFormData instead of User
  }


}
