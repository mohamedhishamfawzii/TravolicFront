import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-searchdiv',
  templateUrl: './searchdiv.component.html',
  styleUrls: ['./searchdiv.component.css']
})

export class SearchdivComponent implements OnInit {
  constructor() { }
  mobVersion;
  webVersion = true;
  width = screen.width;
  ngOnInit() {
    if (this.width < 860 ) {
      this.mobVersion = true;
      this.webVersion = false;
    }
  }
}
