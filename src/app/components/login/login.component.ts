import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { CredentialsService } from '../../services/credentials.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userN: string;
  passW: string;
  public user: User;
  constructor(private postService: CredentialsService) { }

  ngOnInit() {
    this.user = new User();
  }

  sendCredentials(){
    this.user.userN = this.userN;
    this.user.passW = this.passW;
    this.postService.postCredentials(this.user).subscribe(res => console.log(res.userN));
    console.log("1");
  }

}
