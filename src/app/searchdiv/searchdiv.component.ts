import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {BackendService} from '../backend.service';

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

airports;
location;
isSpinningFrom = false;
isSpinningTo = false;
  constructor(private backendConnect: BackendService, private http: Http) { }
  mobVersion;
  webVersion = true;
  width = screen.width;
  from ;
  to;
  Aairports = [];
  ABirports = [];
  i;
  ngOnInit() {
    if (this.width < 860 ) {
      this.mobVersion = true;
      this.webVersion = false;
    }
    this.http.get('json/airports.json')
      .subscribe((res) => {
         this.airports = res.json();
         this.backendConnect.getLocation().then((result)=> {
           this.location = result.json();
          console.log("location result",this.location);
           this.airports.forEach( (air) =>{
             if (air.City === this.location.city)
             {this.from = air.IATA; }
           });
           if (this.from === undefined){
             this.airports.forEach( (air) =>{
               if (air.Country === this.location.country)
               {this.from = air.IATA; }

             });
           }
           console.log(this.from);
           console.log(this.airports);
          }
        );
      });

  }
  clickedfrom() {
   console.log("clicked");
   this.isSpinningFrom=true;
   setTimeout(()=>{
      this.isSpinningFrom=false;
    },4000);
    this.Aairports=[];
  }
  clickedto(){
    this.isSpinningTo=true;
    setTimeout(()=>{
      this.isSpinningTo=false;
    },4000);
    this.ABirports=[];


  }
  changedfrom(searchtxt){
    this.Aairports=[];
    console.log("changed called ");
    console.log(searchtxt);
    if(searchtxt==""){
      this.Aairports=[];
    }
    this.airports.forEach( (air) =>{
      if (searchtxt.toLowerCase() === air.IATA.toLowerCase())
      {

        this.Aairports.push(air);
      }
      if (searchtxt.toLowerCase() === air.Country.toLowerCase())
      {

        this.Aairports.push(air);
      }
      if (searchtxt.toLowerCase() === air.City.toLowerCase()&&(searchtxt!=""))
      {

        this.Aairports.push(air);
      }
    });
  }
  changedto(searchtxt){
    this.ABirports=[];
    console.log("changed called ");
    console.log(searchtxt);
    if(searchtxt==""){
      this.ABirports=[];
    }

    this.airports.forEach( (air) =>{
      if (searchtxt.toLowerCase() === air.IATA.toLowerCase())
      {
          this.ABirports.push(air);

      }
       if (searchtxt.toLowerCase() === air.Country.toLowerCase())
      {

          this.ABirports.push(air);
      }
       if ((searchtxt.toLowerCase() === air.City.toLowerCase()) && (searchtxt!=""))
      {

          this.ABirports.push(air);
      }
    });
  }

}
