import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  constructor(private myClient: HttpClient) {}
  url: string = "http://localhost:8080/login";

/*postCredentials(usr: User): Observable<User> {
  
  const headers = new HttpHeaders({'Access-Control-Allow-Origin':'*'}).set('content-type','application/json');
  var body = 
  {
    username: usr.userN,
    password: usr.passW
  };
  return this.myClient.post<User>(this.url, body, {headers} );
}*/

postCredentials(usr: User): Promise<User> {
  
  const headers = new HttpHeaders({'Access-Control-Allow-Origin':'*'}).set('content-type','application/json');
  var body = 
  {
    username: usr.userN,
    password: usr.passW
  };
  return this.myClient.post<User>(this.url, body, {headers} ).toPromise();
}

}




