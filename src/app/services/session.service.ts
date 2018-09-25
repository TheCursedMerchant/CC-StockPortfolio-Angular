import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  //constructor inject the HttpClient dependency
  constructor(private httpClient:HttpClient) { }

  readSessionObject(url:string):Observable<string[]>{
                                                                          //post needs url, body, [header optional]
    return this.httpClient.get<string[]>(url);
  }

  postSessionObject(url:string) : Observable<string[]>{
    return this.httpClient.post<string[]>(url, {});
  }
}
