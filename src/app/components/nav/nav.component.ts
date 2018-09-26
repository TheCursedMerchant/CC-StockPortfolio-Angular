import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  //inject session service dependency we're gonna use to verify our session
  constructor(private sessionService:SessionService) { }

  ngOnInit() {
  }

  sessionCheck(){
    
  }

  invalidateSession(){
    
  }

}
