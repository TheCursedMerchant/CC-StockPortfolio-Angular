import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-stock-directory',
  templateUrl: './stock-directory.component.html',
  styleUrls: ['./stock-directory.component.css']
})
export class StockDirectoryComponent implements OnInit {

  constructor(private localStorageService:LocalStorageService) { }

  ngOnInit() {
    if(this.localStorageService.getSaved("username") === null)
      window.location.replace("login");
  }

}
