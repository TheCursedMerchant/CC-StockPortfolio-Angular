import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-portfolio',
  templateUrl: './user-portfolio.component.html',
  styleUrls: ['./user-portfolio.component.css']
})
export class UserPortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }
  
  url:string = "http://localhost:8094/stockTransactions";
  username = localStorage.getItem("username");

  
}
