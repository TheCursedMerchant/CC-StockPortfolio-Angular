import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

 url: string = "https://api.iextrading.com/1.0/stock/fb/batch?types=quote,news,chart&range=1m&last=10"
  constructor(private http: HttpClient) { }

  /*getStocks(): Observable<RootObject[]>{
    return this.http.get<RootObject[]>(this.url);
  }*/

  getStocks():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }
}
