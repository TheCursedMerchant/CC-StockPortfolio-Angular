import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../../services/test-service.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  
})
export class TestComponent implements OnInit {

  constructor(private myService: TestServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  quote : Quote = {
    symbol: undefined,
    companyName: undefined,
    open: undefined
  }



  getStocks(){
    this.myService.getStocks()
    .subscribe((res =>{let resources = res["quote"];
    this.quote.symbol = (resources["symbol"]);
    this.quote.companyName = resources["companyName"];
    this.quote.open = resources["open"];
  }));
  }

}
