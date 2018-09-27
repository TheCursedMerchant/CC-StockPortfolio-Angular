import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/localstorage.service';
import { TestServiceService } from '../../services/test-service.service';
import { QuoteClass } from '../../models/quoteClass';

@Component({
  selector: 'app-stock-company',
  templateUrl: './stock-company.component.html',
  styleUrls: ['./stock-company.component.css']
})
export class StockCompanyComponent implements OnInit {

  constructor(private localStorageService:LocalStorageService, private quoteService: TestServiceService) { }
  public mainQuote : QuoteClass;
  public mySymbol: string = this.localStorageService.getSaved("symbol");
  public shares: number;

  ngOnInit() {
    if(this.localStorageService.getSaved("username") === null)
      window.location.replace("login");
     this.getQuote(this.localStorageService.getSaved("symbol"));
      console.log(this.localStorageService.getSaved("symbol"));
  }

  getQuote(newSymbol: string): void{
    let url = "https://api.iextrading.com/1.0/stock/" + newSymbol + "/quote?filter=symbol,open,companyName,companyur";
    this.quoteService.getQuoteById(url).then(quote=>{
      this.mainQuote = quote;
    });
    console.log(this.mainQuote);
  }
}
