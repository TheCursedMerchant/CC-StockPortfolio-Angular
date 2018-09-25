import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { CredentialsService } from '../../services/credentials.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId : number;
  userN: string;
  passW: string;
  name: string;

  showe : string;

  public user: User;

  constructor(private postService: CredentialsService, private sessionService:SessionService) { }

  ngOnInit() {
    this.user = new User();
    console.log(this.user);
  }

  /*sendCredentials(){
    this.user.userN = this.userN;
    this.user.passW = this.passW;
    this.postService.postCredentials(this.user).subscribe(res =>
      {
      this.user.userId = res.userId;
      console.log(this.user.userId);
      this.user.userN = res.userN;
      console.log(this.user.userN);
      this.user.passW = res.passW;
      console.log(this.user.passW);
      this.user.name = res.name;
      console.log(this.user.name);
    });
    if(this.user.name === undefined || this.user.userN === undefined
    || this.user.userN == undefined || this.user.userId == undefined){
      //window.location.reload(true);
      console.log("user not found");
    }else{
      //window.location.replace("home");
      console.log("user found");
    }
    console.log(this.user);
  }*/

  sendCredentials(){
    this.user.userN = this.userN;
    this.user.passW = this.passW;
    this.postService.postCredentials(this.user).then(res =>
      {
      this.user.userId = res.userId;
      console.log(this.user.userId);
      this.user.userN = res.userN;
      console.log(this.user.userN);
      this.user.passW = res.passW;
      console.log(this.user.passW);
      this.user.name = res.name;
      console.log(this.user.name);
      if(this.user.name === undefined || this.user.userN === undefined
        || this.user.userN === undefined || this.user.userId === undefined){
          window.location.reload(true);
          console.log("user not found");
          this.user.userId = undefined;
          this.user.name = undefined;
        }else{
          // window.location.replace("home");
          this.sessionService.readSessionObject("http://localhost:8080/session").subscribe(session =>{
            console.log(session);
          }
            );
          console.log("user found");
        }
        console.log(this.user);
    });
  }
}
