import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StockCompanyComponent } from './components/stock-company/stock-company.component';
import { StockDirectoryComponent } from './components/stock-directory/stock-directory.component';
import { UserPortfolioComponent } from './components/user-portfolio/user-portfolio.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HomeComponent } from './components/home/home.component';
import { TestServiceService } from './services/test-service.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    StockCompanyComponent,
    StockDirectoryComponent,
    UserPortfolioComponent,
    UserSettingsComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TestServiceService],
  bootstrap: [AppComponent]
   //adding bootstrap: npm install bootstrap. in angular.json, put location under styles. restart to do ng serve
})
export class AppModule { }
