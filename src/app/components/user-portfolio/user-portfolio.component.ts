import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/localstorage.service';
import { TransactionServiceService } from '../../services/transaction-service.service';
import { Transaction } from '../../models/transaction';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-portfolio',
  templateUrl: './user-portfolio.component.html',
  styleUrls: ['./user-portfolio.component.css']
})
export class UserPortfolioComponent implements OnInit {
  url:string = "http://localhost:8094/stockTransactions";
  username = localStorage.getItem("username");
  transactions:Transaction[] = [];

  constructor(private localStorageService:LocalStorageService,
              private transactionService:TransactionServiceService) { }

  ngOnInit() {
    if(this.localStorageService.getSaved("username") === null)
      window.location.replace("login");
    //populate the table w/ fill table function
    this.fillPortfolioFromDB();
  }

  fillPortfolioFromDB(): void{
    this.transactionService.getDatabaseTransactions("http://localhost:8094/stockTransactions").subscribe(
      objects =>{ 
          for(let obj of objects)       //use the session to show the profile specific to the user
              if(obj.user.userN === this.localStorageService.getSaved("username"))
                  this.transactions.push( new Transaction(obj.id, obj.stockSymbol, obj.numShares, 
                                          obj.currentPrice, obj.openPrice, obj.boughtFor, obj.sellingFor, 
                                          obj.totalReturn, obj.date, obj.user, obj.stockName )); 
      }
    );
  }

  
  


  
}
