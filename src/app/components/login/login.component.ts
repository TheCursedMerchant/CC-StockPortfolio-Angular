import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userN:string;
  passW:string;

  constructor() { }

  ngOnInit() {
  }

  setUsername(){
    this.userN = document.getElementsByName("username")[0].nodeValue;
    console.log(this.userN);
  }
  setPassword(){
    this.passW = "hello";
  }
  sendCredentials(){

  }

}
