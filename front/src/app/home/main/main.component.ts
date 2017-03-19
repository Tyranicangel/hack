import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	city:string;
  constructor() { 
  	this.city="";
  }

  ngOnInit() {
  }

}
