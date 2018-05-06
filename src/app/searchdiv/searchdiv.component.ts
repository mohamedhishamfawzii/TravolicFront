import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {BackendService} from '../backend.service';
import {ActivatedRoute, Router, RouterModule, Routes} from '@angular/router';
import { Console } from '@angular/core/src/console';
@Component({
  selector: 'app-searchdiv',
  templateUrl: './searchdiv.component.html',
  styleUrls: ['./searchdiv.component.css']
})
export class SearchdivComponent implements OnInit {
  type = 'oneway';
  adults = ['1 adult', '2 adults', '3 adults', '4 adults', '5 adults', '6 adults', '7 adults', '8 adults', '9 adults'];
  children = ['1 child', '2 children', '3 children', '4 children', '5 children', '6 children', '7 children', '8 children', '9 children'];
  infants = ['1 infant', '2 infants', '3 infants', '4 infants', '5 infants', '6 infants', '7 infants', '8 infants', '9 infants'];
  adultss =1;
  childrenn = 0;
  infantss =0;
  airports;
  counter=3;
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
  utc1;
  date4;
  date5;
  second = true;
  third = true;
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

    console.log(this.backendConnect.currency);
    this.Aairports = [];
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
                this.Aairports.push(air.IATA);
                this.from = air.IATA;
              }
            });
            if (this.from === undefined) {
              this.Aairports = [];
              this.airports.forEach((air) => {
                if (air.Country === this.location.country) {
                  this.Aairports.push(air.IATA);
                  this.from = air.IATA;
                }

              });
            }
if (this.from === undefined) {
    this.Aairports = [];}

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

  clickedawy(option){
    console.log(option);
    this.from=option.IATA;
    this.Aairports = [];

  }
  clickedawy2(option){
    console.log(option);
    this.from2=option.IATA;
    this.Aairports = [];

  }
  clickedawy3(option){
    console.log(option);
    this.from3=option.IATA;
    this.Aairports = [];

  }
  clickedawy4(option){
    console.log(option);
    this.from4=option.IATA;
    this.Aairports = [];

  }
  clickedawy5(option){
    console.log(option);
    this.from5=option.IATA;
    this.Aairports = [];

  }
  clickedawyto(option){
    console.log(option);
    this.to=option.IATA;
    this.from2=option.IATA;
    this.ABirports = [];

  }
  clickedawyto2(option){
    console.log(option);
    this.to2=option.IATA;
    this.from3=option.IATA;
    this.ABirports = [];

  }

  clickedawyto3(option){
    console.log(option);
    this.to3=option.IATA;
    this.from4=option.IATA;
    this.ABirports = [];

  }
  english(){
    if(this.backendConnect.en){
    return true;
  }
  else{
    return false;
  }
  }
  spanish(){
    if(this.backendConnect.sp){
    return true;
  }
  else{
    return false;
  }
  }
  italian(){
    if(this.backendConnect.it){
    return true;
  }
  else{
    return false;
  }
  }
  russian(){
    if(this.backendConnect.ru){
    return true;
  }
  else{
    return false;
  }
  }
  turkish(){
    if(this.backendConnect.tr){
    return true;
  }
  else{
    return false;
  }
  }
  chinese(){
    if(this.backendConnect.ch){
    return true;
  }
  else{
    return false;
  }
  }
  japanese(){
    if(this.backendConnect.jp){
    return true;
  }
  else{
    return false;
  }
  }
  german(){
    if(this.backendConnect.gr){
    return true;
  }
  else{
    return false;
  }
  }
  french(){
    if(this.backendConnect.fr){
    return true;
  }
  else{
    return false;
  }
  }
  clickedawyto4(option){
    console.log(option);
    this.to4=option.IATA;
    this.from5=option.IATA;
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
      console.log(this.date);
      if(this.type=='oneway') {
        this.utcDate=Date.parse(this.date);
        this.parameters = ("type=" + this.type + "&" + "departure=" + this.from + "&" + "arrival=" + this.to + "&" + "from=" + this.utcDate + "&" + "adults=" + this.adultss+ "&" + "infants=" + this.infantss+ "&" + "children=" + this.childrenn+ "&" + "cabin=" + this.class+"&" + "curr=" + this.backendConnect.currency +"&" + "directonly=" + this.direct+"&" + "country=" + this.backendConnect.country+"&" + "city=" + this.backendConnect.city);
      }else if (this.type=='round')
      {
        this.utcDate=Date.parse(this.theTwodates[0]);
        this.utc1=Date.parse(this.theTwodates[1]);
        this.parameters = ("type=roundtrip"  + "&" + "departure=" + this.from + "&" + "arrival=" + this.to + "&" + "from=" + this.utcDate+ "&" + "to=" + this.utc1+ "&" + "adults=" + this.adultss+ "&" + "infants=" + this.infantss+ "&" + "children=" + this.childrenn+ "&" + "cabin=" + this.class+"&" + "curr=" + this.backendConnect.currency+"&" + "directonly=" + this.direct);

      }
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
