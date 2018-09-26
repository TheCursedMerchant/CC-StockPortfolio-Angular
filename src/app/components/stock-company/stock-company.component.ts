import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-stock-company',
  templateUrl: './stock-company.component.html',
  styleUrls: ['./stock-company.component.css']
})
export class StockCompanyComponent implements OnInit {

  constructor(private localStorageService:LocalStorageService) { }

  ngOnInit() {
    if(this.localStorageService.getSaved("username") === null)
      window.location.replace("login");
  }

}
