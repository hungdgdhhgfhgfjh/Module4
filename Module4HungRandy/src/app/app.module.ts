import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BookModuleModule} from "./book-module/book-module.module"
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
