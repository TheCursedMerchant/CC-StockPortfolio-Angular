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

  constructor(private localStorageService:LocalStorageService,
              private transactionService:TransactionServiceService) { }

  ngOnInit() {
    if(this.localStorageService.getSaved("username") === null)
      window.location.replace("login");
    //populate the table w/ fill table function
    this.fillPortfolioFromDB();
  }

  //variables memebres
  url:string = "http://localhost:8094/stockTransactions";
  username = localStorage.getItem("username");
  unsoldTransactions:Transaction[] = [];
  soldTransactions:Transaction[] = [];
  form:number[] = [];
  submitButtonDisabled = true;    //change to false when all the inputs are okay, then enable submit button

  validateInput(){
    //(change)we can disable the submit button until it checks each item of the form and they are all valid.
    //so just loop through array and have them pass a check.
      //if undefined, ignore it. 
      //If you see something negative or greater than # shares, set boolean flag to false
      //if flag is false, submit button will be 
      //change variable to yes, button is enabled.
    //(click) if variable is yes, button is enabled. if not. do nothing, rtn
      //otherwise, its enabled and do everything safely. 
      //change windows with a reload and give notification of what has been changed??
    let atLeastOne:boolean = false;           //need both these flags to be true to enable button
    let validNumberToSell:boolean = true;
    console.log("list begin: ");
    for(let i=0; i < this.form.length; i++){
      console.log(this.form[i]);
      if(this.form[i]){ //has some value that isn't falsy
          atLeastOne = true;
        //check if number is > 0 but < transactions[i].shares
        if(this.form[i] < 0 || this.form[i] > this.unsoldTransactions[i].shares) 
        {   //send an alert! and set flag
          validNumberToSell = false;
          //alert! number must be between 0 and this.unsoldTransactions[i].shares
          //FIXME
        }    
      }
    }
    //check both flags true or not, then set property
    if(atLeastOne === true && validNumberToSell === true)
      this.submitButtonDisabled = false;
    else  
      this.submitButtonDisabled = true;
  } //validateInput()
  
  sell(){
    //for every transaction that is being requested
      //we are editing the transaction. If no more stocks(shares), then do DELETE
      //else do PUT and make POST transaction that is "SOLD"
    for(let i=0; i < this.form.length; i++)
    {
      if(this.form[i]) //if truthy value
        this.unsoldTransactions[i] 
      // this.transactionService.putDatabaseTransaction(url)
      
    }
    //change the page back to this one...reload i guess
  } //sell()

  fillPortfolioFromDB(): void{
    this.transactionService.getDatabaseTransactions("http://localhost:8094/stockTransactions").subscribe(
      objects =>{ 
          // console.log(objects);
          for(let obj of objects) {      //use the session to show the profile specific to the user
              if(obj.user.userN === this.localStorageService.getSaved("username"))
                if(obj.status === "UNSOLD")
                  this.unsoldTransactions.push( new Transaction(obj.id, obj.stockSymbol, obj.numShares, 
                                          obj.currentPrice, obj.openPrice, obj.boughtFor, obj.sellingFor, 
                                          obj.totalReturn, obj.date, obj.user, obj.stockName, obj.status ));
                else //"SOLD"
                  this.soldTransactions.push( new Transaction(obj.id, obj.stockSymbol, obj.numShares, 
                                          obj.currentPrice, obj.openPrice, obj.boughtFor, obj.sellingFor, 
                                          obj.totalReturn, obj.date, obj.user, obj.stockName, obj.status ));
            }
      }
    );
  } //fillPortfolioFromDB()
}
