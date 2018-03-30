import { Component, OnInit } from '@angular/core';
import {BackendService} from '../backend.service';
import {Router} from '@angular/router';
import {Http} from '@angular/http';

@Component({
  selector: 'app-searchdivresults',
  templateUrl: './searchdivresults.component.html',
  styleUrls: ['./searchdivresults.component.css']
})
export class SearchdivresultsComponent implements OnInit {

  type = 'oneway';
  adults = ['1 adult', '2 adults', '3 adults', '4 adults', '5 adults', '6 adults', '7 adults', '8 adults', '9 adults'];
  children = ['1 child', '2 children', '3 children', '4 children', '5 children', '6 children', '7 children', '8 children', '9 children'];
  infants = ['1 infant', '2 infants', '3 infants', '4 infants', '5 infants', '6 infants', '7 infants', '8 infants', '9 infants'];
  adultss;
  childrenn;
  infantss;
  airports;
  counter=1;
  from2;
  from3;
  from4;
  from5;
  to2;
  to3;
  to4;
  to5;
  date2;
  date3;
  date4;
  date5;
  second;
  third;
  fourth;
  fifth;
  twoDates;
  error;
  showdiv = true ;
  errmsg;
  theTwodates;
  date;
  oneDate = true;
  class;
  direct = false;
  location;
  isSpinningFrom = false;
  isSpinningTo = false;

  constructor(private backendConnect: BackendService, private http: Http ,private route: Router) {
  }

  mobVersion;
  webVersion = true;
  width = screen.width;
  from;
  to;
  multi = false;
  utcDate;
  parameters;
  Aairports = [];
  ABirports = [];
  i;

  ngOnInit() {
    if (this.width < 860) {
      this.mobVersion = true;
      this.webVersion = false;
    }
    this.http.get('json/airports.json')
      .subscribe((res) => {
        this.airports = res.json();
        this.backendConnect.getLocation().then((result) => {
            this.location = result.json();
            console.log('location result', this.location);
            this.airports.forEach((air) => {
              if (air.City === this.location.city) {
                this.Aairports.push(air);
                this.from = air.IATA;
              }
            });
            if (this.from === undefined) {
              this.airports.forEach((air) => {
                if (air.Country === this.location.country) {
                  this.Aairports.push(air);
                  this.from = air.IATA;
                }

              });
            }
            console.log(this.from);
            console.log(this.airports);
          }
        );
      });

  }

  clickedfrom() {
    console.log('clicked');
    this.isSpinningFrom = true;
    setTimeout(() => {
      this.isSpinningFrom = false;
    }, 4000);
    this.Aairports = [];
  }

  clickedto() {
    this.isSpinningTo = true;
    setTimeout(() => {
      this.isSpinningTo = false;
    }, 4000);
    this.ABirports = [];


  }

  changedfrom(searchtxt) {
    this.Aairports = [];
    console.log('changed called ');
    console.log(searchtxt);
    if (searchtxt == '') {
      this.Aairports = [];
    }
    this.airports.forEach((air) => {
      if (searchtxt.toLowerCase() === air.IATA.toLowerCase()) {

        this.Aairports.push(air);
      }
      if (searchtxt.toLowerCase() === air.Country.toLowerCase()) {

        this.Aairports.push(air);
      }
      if (searchtxt.toLowerCase() === air.City.toLowerCase() && (searchtxt != '')) {

        this.Aairports.push(air);
      }
    });
  }

  changedto(searchtxt) {
    this.ABirports = [];
    console.log('changed called ');
    console.log(searchtxt);
    if (searchtxt == '') {
      this.ABirports = [];
    }

    this.airports.forEach((air) => {
      if (searchtxt.toLowerCase() === air.IATA.toLowerCase()) {
        this.ABirports.push(air);

      }
      if (searchtxt.toLowerCase() === air.Country.toLowerCase()) {

        this.ABirports.push(air);
      }
      if ((searchtxt.toLowerCase() === air.City.toLowerCase()) && (searchtxt != '')) {

        this.ABirports.push(air);
      }
    });
  }

  search() {

    if (this.from == undefined || this.to == undefined || (this.date == undefined && this.theTwodates == undefined)) {
      if (this.from == undefined) {
        this.errmsg = 'you have to select a FROM Airport';
        this.error = true;
      }
      if (this.to == undefined) {
        this.errmsg = 'you have to select a TO Airport';
        this.error = true;
      }
      if (this.date == undefined && this.theTwodates == undefined) {
        this.errmsg = 'you have to select Date';
        this.error = true;

      }
    }
    else {
      this.error = false;
      this.utcDate=Date.UTC(this.date.getUTCFullYear(),this.date.getUTCMonth(),this.date.getUTCDate());
      this.parameters=("type="+this.type+"&"+"departure="+this.from+"&"+"arrival="+this.to+"&"+"from="+this.utcDate);

      this.route.navigate(['/flights/search/',this.parameters]);
    }
  }

  switch() {
    if (this.type == 'round') {
      this.showdiv=true;
      this.twoDates = true;
      this.oneDate = false;
      this.multi=false;
    }
    if (this.type == 'oneway') {
      this.showdiv=true;
      this.twoDates = false;
      this.oneDate = true;
      this.multi=false;
    }
    if (this.type =='mul') {
      this.showdiv=false;
      this.multi=true;
      console.log("here");
    }
  }
  plus(){

    if(this.counter<5){
      this.counter++;}
    switch (this.counter) {
      case 2 :
        this.second = true;
        break;
      case 3 :
        this.third = true;
        break;
      case 4 :
        this.fourth = true;
        break;
      case 5 :
        this.fifth = true;

    }}

  minus(){

    if(this.counter>1){
      this.counter--;}
    switch (this.counter) {
      case 1:
        this.second = false;
      case 2 :
        this.third = false;
        break;
      case 3 :
        this.fourth = false;
        break;
      case 4 :
        this.fifth = false;
        break;
    }

  }
}
