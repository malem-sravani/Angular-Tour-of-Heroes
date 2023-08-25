import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule,Routes } from '@angular/router';
import { HeroSearchComponent } from './hero-search/hero-search.component';

const routes:Routes =[ 
  // { 
  //   path: '', redirectTo: '/dashboard', pathMatch: 'full' 
  // },                               
  { 
    path: 'heroes' ,component:HeroesComponent
  },
  {
    path: 'dashboard', component:DashboardComponent
  },
  {
    path: 'detail/:id', component:HeroDetailComponent
  }
 ]

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }