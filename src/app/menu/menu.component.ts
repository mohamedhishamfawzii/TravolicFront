import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  mobVersion;
  webVersion = true;
  width = screen.width;
  width_text = 0.8 * (screen.width / 7);

  constructor() {
  }

  ngOnInit() {
    if (this.width < 860) {
      this.mobVersion = true;
      this.webVersion = false;
    }
  }

}
