import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  isCollapsed = false;
 width= screen.width;
 countries;
 country;
  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('json/countries.json')
      .subscribe(res => this.countries = res.json());

  }

}
