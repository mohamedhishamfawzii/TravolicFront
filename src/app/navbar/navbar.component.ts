import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {BackendService} from '../backend.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  country;
  countries;
  currency ;
  currencies = ['EGP','USD','EUR'];
  language;
  languages;
  location;
  isCollapsed = false;
  width = screen.width;
  mobVersion;
  webVersion = true;
  constructor(private backendConnect: BackendService,private http: Http) { }

  ngOnInit() {

    this.backendConnect.currency = "USD";
    this.http.get('json/countries.json')
      .subscribe(res => this.countries = res.json());
    if (this.width < 860 ) {
      this.mobVersion = true;
      this.webVersion = false;
    }

    this.backendConnect.getLocation().then((result)=> {
      this.location=result.json();
      this.country =this.location.country;
      this.currency=this.location.currency;
  });
}}
