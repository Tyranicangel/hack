import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy,HashLocationStrategy } from '@angular/common';
import { AppRouting } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AgmCoreModule } from 'angular2-google-maps/core';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    AppRouting,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDR4pmhlLIsbc4bvHYDVjQzd1p5CWMmV5M'
    })
  ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
