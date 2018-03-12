import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  mobVersion;
  webVersion = true;
  width = screen.width;
  constructor() { }

  ngOnInit() {
    if (this.width < 740 ) {
      this.mobVersion = true;
      this.webVersion = false;
    }
  }

}
