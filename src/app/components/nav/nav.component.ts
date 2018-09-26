import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  //inject session service dependency we're gonna use to verify our session
  constructor() { }

  ngOnInit() {
  }

}
