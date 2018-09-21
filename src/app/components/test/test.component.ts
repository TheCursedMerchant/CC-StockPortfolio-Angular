import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../../services/test-service.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { QuoteClass } from '../../models/quoteClass';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  
})
export class TestComponent implements OnInit {

  constructor(private myService: TestServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  startIndex : number = 0;
  condition : boolean = false;
  // stock : Stock = {
  //   symb: undefined,
  //   companyN: undefined,
  //   opening: undefined
  // }

  listQuotes : QuoteClass[] = [];//[{symbol: 'a', companyName: 'b', open: 234}];
  // quotes : {symbol: undefined, companyName: undefined, open: undefined}[] = [];
  
  symbols : string[] = [];    //omg b4 didnt work...but stackoverflow said we didnt initialize our
                //array ;D   so needed to do = []; empty array
  // cireyQuotes: Quote[];
  test : undefined;

  // getStocks(){
  //   this.myService.getStocks()
  //   .subscribe((res =>{let resources = res["quote"];
  //   this.stock.symb = (resources["symbol"]);
  //   this.stock.companyN = resources["companyName"];
  //   this.stock.opening = resources["open"];
  // }));
  // }

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

  getNextQuotes(){
    // this.getQuotes(this.startIndex, this.startIndex + 10);
    this.getCireyQuotes(this.startIndex, this.startIndex + 10);
    this.startIndex += 10;
  }

  backToZero(){
    this.startIndex = 0; //reset start inDex
    this.getNextQuotes(); //call get tenquotes again, but with new startIndex :)
  }

  // getQuotes(start:number, end:number){
  //   //call this after getSymbols has populated this.symbols[]
  //   for(let i= start; i < end; i++) //for every symbol url
  //   {
  //     // https://api.iextrading.com/1.0/stock/aapl/quote?filter=symbol,open,companyName
  //     //this quote except replace "aapl"
  //     let url = "https://api.iextrading.com/1.0/stock/" + this.symbols[i] + "/quote?filter=symbol,open,companyName";
  //     this.myService.getQuotes(url)
  //     .subscribe((apiQuote =>{ 
  //       // https://visualstudiomagazine.com/articles/2016/01/01/exploiting-typescript-arrays.aspx
  //         // this.quotes[i - start] = new QuoteClass(
  //           // apiQuote["symbol"], apiQuote["open"], apiQuote["companyName"]);               //"quotes" is array of quotes
  //         // this.quotes[i - start]["symbol"] = apiQuote["symbol"];
  //         // this.quotes[i - start]["open"] = apiQuote["open"];
  //         // this.quotes[i - start]["companyName"] = apiQuote["companyName"];
  //     }));
  //   }
  // }

  getCireyQuotes(start:number, end:number){
    for(let i = start; i < end; i++)
    {
      console.log(i);
      let url = "https://api.iextrading.com/1.0/stock/" + this.symbols[i] + "/quote?filter=symbol,open,companyName";
      this.myService.getQuoteCirey(url)
      .then((currentQuote)=>{
        this.listQuotes[i - start] = currentQuote;
      });
    }
    this.condition = true;
  }
}

// https://www.concretepage.com/questions/544