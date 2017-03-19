import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
	title: string = 'My first angular2-google-maps project';
	lat: number = 51.678418;
	lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
