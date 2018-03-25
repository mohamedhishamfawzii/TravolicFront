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
airports;
location;
isSpinningFrom = false;
isSpinningTo =false;
  constructor(private backendConnect: BackendService, private http: Http) { }
  mobVersion;
  webVersion = true;
  width = screen.width;
  from ;
  to;
  Aairports=[];
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
           this.location=result.json();
          console.log("location result",this.location);
           for ( var i =0 ; i<1000;i++ ){
             this.Aairports.push(this.airports[i]);
           }
           this.Aairports.forEach( (air) =>{
             air.email = (air.code +"    "+air.name +"          "+ air.country + air.city);
             if (air.city === this.location.city)
             {this.from = air.code; }
           });
           if (this.from === undefined){
             this.Aairports.forEach( (air) =>{
               if (air.country === this.location.country)
               {this.from = air.code; }

             });
           }
           console.log(this.from);
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

  }
  clickedto(){
    this.isSpinningTo=true;
    setTimeout(()=>{
      this.isSpinningTo=false;
    },4000);

  }

}
