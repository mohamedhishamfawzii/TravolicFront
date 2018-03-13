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
backendConnect: BackendService;
  constructor(private http: Http) { }
  mobVersion;
  webVersion = true;
  width = screen.width;
  from ;
  to;
  ngOnInit() {
    if (this.width < 860 ) {
      this.mobVersion = true;
      this.webVersion = false;
    }
    this.http.get('json/airports.json')
      .subscribe(res => {this.airports = res.json();
        this.location = this.backendConnect.getLocation().then(function () {
          console.log("locatiooooo",this.location);
          this.airports.forEach(function (airport) {
            if (airport.city==this.location.city){
              this.from=airport.code;
            }
          });
          }
        );
      });

  }
}
