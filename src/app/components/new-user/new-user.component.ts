import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { TestServiceService } from '../../services/test-service.service';
import { CredentialsService } from '../../services/credentials.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  
  newName: string;
  username: string;
  password: string;

  constructor(private userService: CredentialsService) { }

  ngOnInit() {
  }

  createUser(){
    let newUser: User;
    let url = "http://localhost:8094/user";
    console.log(this.newName);
    newUser.name = this.newName;
    newUser.userN = this.username;
    newUser.passW = this.password;
    newUser.userId = null;

    this.userService.postUser(url, newUser);
  }

}
