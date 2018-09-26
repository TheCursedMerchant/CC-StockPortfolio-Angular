import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';
import { Observable } from '../../../node_modules/rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {
  constructor(private httpClient:HttpClient) { }

  getDatabaseTransactions(url:string): Observable<any[]>{
    return this.httpClient.get<any[]>(url);
  }
}
