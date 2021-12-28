import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BackEndModule} from "./back-end/back-end.module";

@NgModule({
  declarations: [
    AppComponent,
     

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BackEndModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
