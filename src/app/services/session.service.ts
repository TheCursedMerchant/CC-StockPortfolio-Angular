import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  //constructor inject the HttpClient dependency
  constructor(private httpClient:HttpClient) { }

  readSessionObject():Observable<string[]>{
    // return this.httpClient.post<string[]>("http://localhost:8080/session",{}); //get only needs a url
                                                                          //post needs url, body, [header optional]
    return this.httpClient.get<string[]>("http://localhost:8080/session");
  }
}
