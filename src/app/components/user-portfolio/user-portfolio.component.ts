import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-user-portfolio',
  templateUrl: './user-portfolio.component.html',
  styleUrls: ['./user-portfolio.component.css']
})
export class UserPortfolioComponent implements OnInit {

  constructor(private localStorageService:LocalStorageService) { }

  ngOnInit() {
    if(this.localStorageService.getSaved("username") === null)
      window.location.replace("login");
  }

  url:string = "http://localhost:8094/stockTransactions";
  username = localStorage.getItem("username");

  
}
