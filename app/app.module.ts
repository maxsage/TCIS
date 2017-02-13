import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {IncomeStreamListComponent} from "./incomestreams/incomestream-list.component";

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, IncomeStreamListComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
