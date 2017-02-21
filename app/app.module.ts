import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {IncomeStreamListComponent} from "./incomestreams/incomestream-list.component";
import {IncomeStreamFilterPipe} from "./incomestreams/incomestream-filter.pipe";
import {StarComponent} from "./shared/star.component";

@NgModule({
  imports: [
      BrowserModule,
      FormsModule
  ],
  declarations: [ AppComponent,
      IncomeStreamListComponent,
      IncomeStreamFilterPipe,
      StarComponent
      ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
