import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDR4pmhlLIsbc4bvHYDVjQzd1p5CWMmV5M'
    })
  ],
  declarations: [HomeComponent, WorkspaceComponent, MainComponent]
})
export class HomeModule { }
