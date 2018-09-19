import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../../services/test-service.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  
})
export class TestComponent implements OnInit {

  constructor(private myService: TestServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  quote : Quote = {
    symbol: undefined,
    companyName: undefined,
    open: undefined
  }

  symbols : string[] = [];    //omg b4 didnt work...but stackoverflow said we didnt initialize our
                //array ;D   so needed to do = []; empty array


  getStocks(){
    this.myService.getStocks()
    .subscribe((res =>{let resources = res["quote"];
    this.quote.symbol = (resources["symbol"]);
    this.quote.companyName = resources["companyName"];
    this.quote.open = resources["open"];
  }));
  }

  getSymbols(){
    this.myService.getSymbols().subscribe
    ((symbols =>{ 
      for(let i in symbols){
        this.symbols.push(symbols[i]["symbol"]); //only did push to try to make work..i think can do
                                                //regular way to set tho
        // console.log(symbols[i]["symbol"]);
      }
    }));
  }

  getQuotes(start:number, end:number){
    //call this after getSymbols has populated this.symbols[]
    for(let i= start; i < end; i++) //for every symbol url
    {
      // https://api.iextrading.com/1.0/stock/aapl/quote?filter=symbol,open,companyName
      //this quote except replace "aapl"
      let url = "https://api.iextrading.com/1.0/stock/" + this.symbols[i] + "/quote";
      this.myService.getQuotes(url)
      .subscribe((quotes =>{                //"quotes" is array of quotes
          console.log(quotes);
      }));
    }
  }
}
