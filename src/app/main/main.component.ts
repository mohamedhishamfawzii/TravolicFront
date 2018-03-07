import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  mobVersion;
  webVersion = true;
  width = screen.width;
  ngOnInit() {
    if (this.width < 450 ) {
      this.mobVersion = true;
      this.webVersion = false;
    }
  }

}
