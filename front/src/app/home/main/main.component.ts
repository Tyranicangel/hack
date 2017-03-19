import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { LoaderService } from '../../loader/loader.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	city:string;
  constructor(private router:Router, private api:ApiService) { 
  	this.city="";
  }

  ngOnInit() {
  }

  ngOnViewInit(){
  	this.api.get("city/all")
  }

}
