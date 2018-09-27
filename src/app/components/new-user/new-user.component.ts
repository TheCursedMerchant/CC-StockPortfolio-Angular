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
  newuserN: string;
  pass: string;

  constructor(private userService: CredentialsService) { }

  ngOnInit() {
  }

  createUser(){

    let newUser: User = {
      userId: null,
      userN: this.newuserN,
      passW: this.pass,
      name: this.newName
    };

    console.log(newUser);
    for(let u in newUser){
      console.log(u);
    }

    let url = "http://localhost:8094/users";
    console.log(this.newName);

    this.userService.postUser(url, newUser);
  }

}
