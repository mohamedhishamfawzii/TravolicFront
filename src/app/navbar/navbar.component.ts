import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  country;
  countries;
  currency;
  currencies;
  language;
  languages;
  isCollapsed = false;
  width= screen.width;
  mobVersion;
  webVersion = true;
  constructor(private http: Http) { }

  ngOnInit() {

    this.http.get('json/countries.json')
      .subscribe(res => this.countries = res.json());

    if (this.width < 740 ) {
      this.mobVersion = true;
      this.webVersion = false;
    }
  }
}
