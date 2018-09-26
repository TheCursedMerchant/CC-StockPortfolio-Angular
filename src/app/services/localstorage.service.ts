import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor(private http: HttpClient) { }

  saveItem(key, val) : void {
    localStorage.setItem(key, val);
  }
}
