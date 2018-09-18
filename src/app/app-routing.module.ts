import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { UserPortfolioComponent } from './components/user-portfolio/user-portfolio.component'
import { LogoutComponent } from './components/logout/logout.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
 {path: 'login', component: LoginComponent },
 {path: 'settings', component: UserSettingsComponent},
 {path: 'portfolio', component: UserPortfolioComponent },
 {path: 'logout', component: LogoutComponent},
 {path: 'home', component: HomeComponent}
];

@NgModule({
 imports: [
   RouterModule.forRoot(routes)
   // CommonModule
 ],
 // declarations: []
 exports: [ RouterModule ]
})
export class AppRoutingModule { }
