import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-searchdiv',
  templateUrl: './searchdiv.component.html',
  styleUrls: ['./searchdiv.component.css']
})
export class SearchdivComponent implements OnInit {
type='oneway';
airports;
  constructor(private http: Http) { }

from;
to;
  ngOnInit() {
    this.http.get('json/airports.json')
      .subscribe(res => {this.airports = res.json();

        this.airports.forEach( function (airport)
  {
      airport.email =airport.name ;
  } );
      });


  }

}
