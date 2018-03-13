import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import BackendService from '../backend.service';
@Component({
  selector: 'app-searchdiv',
  templateUrl: './searchdiv.component.html',
  styleUrls: ['./searchdiv.component.css']
})
export class SearchdivComponent implements OnInit {
type='oneway';
airports;
location;
backConnect: BackendService;
  constructor(private http: Http) { }
spin=false;
from;
to;
  ngOnInit() {
    this.http.get('json/airports.json')
      .subscribe(res => {this.airports = res.json();
      });
    this.location= this.backConnect.getLocation();


  }
  spinner(){
    this.spin=true;
    setTimeout(() => {
      this.spin = false;
    }, 4000);
  }

}
