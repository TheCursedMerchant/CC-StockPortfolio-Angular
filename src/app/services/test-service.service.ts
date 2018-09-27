import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Quote } from '../../../node_modules/@angular/compiler';
import { Transaction } from '../models/transaction';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

 url: string = "https://api.iextrading.com/1.0/stock/fb/batch?types=quote,news,chart&range=1m&last=10"
 urlSymbols: string = "https://api.iextrading.com/1.0/ref-data/symbols"; 
 constructor(private http: HttpClient) { }

  /*getStocks(): Observable<RootObject[]>{
    return this.http.get<RootObject[]>(this.url);
  }*/

  getStocks():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }

  getSymbols():Observable<any[]>{
    return this.http.get<any[]>(this.urlSymbols);
  }
  getQuotes(url: string):Observable<any[]>{    //this one just has url param
    return this.http.get<any[]>(url);          //cuz we will have to do multiple get requests
  }

  getQuoteById(url: string):Promise<any>{
    return this.http.get<any>(url).toPromise();
  }
  
  getQuoteCirey(url: string):Promise<any>{    //this one just has url param
    return this.http.get<any>(url).toPromise();          //cuz we will have to do multiple get requests
  }

  createQuote(url: string, transaction: Transaction):Promise<Transaction>{
    const headers = new HttpHeaders({'Access-Control-Allow-Origin':'*'}).set('content-type','application/json');
    var body = 
    {
      id: null,
      user: {
        userId: transaction.user.userId,
        userN: transaction.user.userN,
        passW: transaction.user.passW,
        name: transaction.user.name
      },
      stockSymbol: transaction.symbol,
      numShares: transaction.shares,
      boughtFor: transaction.boughtFor,
      sellingFor: 0,
      date: transaction.date,
      stockName:transaction.companyName,
      status: "UNSOLD"
      };
    return this.http.post<Transaction>(url, body, {headers}).toPromise();
  }

  createUser(url: string, user:User):Promise<User>{
    const headers = new HttpHeaders({'Access-Control-Allow-Origin':'*'}).set('content-type','application/json');
    var body = 
    {
      user: {
        userN: user.userN,
        passW: user.passW,
        name: user.name
      }
    };
    return this.http.post<User>(url, body, {headers}).toPromise();
  }
}
