import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {BackendService} from '../backend.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  duration = 'test';
  isCollapsed;
  data;
  parameters;
  flights;

  constructor(private activatedRoute: ActivatedRoute, private route: ActivatedRoute, private service: BackendService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params['data'] !== undefined) {
        // Get the param straight
        this.data = params['data'];
        console.log('toook it ' + this.data);
        this.service.getflights(this.data).then((result) => {
          this.flights = result.json();
          console.log(this.flights);
        });
      }
    });
  }

  time_formatter(value) {
    let period, hour, minute;
    if (value < 12) {
      period = 'AM';
      hour = Math.floor(value);
    } else {
      period = 'PM';
      hour = Math.floor(value) - 12;
    }
    if (hour === 0) {
      hour = 12;
    }
    minute = (value - Math.floor(value)) * 60;
    if (minute === 0) {
      minute = '00';
    }
    return hour + ':' + minute + ' ' + period;
  }

  duration_formatter(value) {
    const hour = Math.floor(value);
    let minute = (value - Math.floor(value)) * 60;
    if (minute === 0) {
     // minute = '00';
    }
    return hour + 'h ' + minute + 'm';
  }

  price_formatter(value) {
    return 'USD ' + value;
  }

}
