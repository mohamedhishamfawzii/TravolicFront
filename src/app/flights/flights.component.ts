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
  departure = '12:00 AM';
  arrival = '11:45 PM';
  departure_from = '12:00 AM';
  departure_to = '11:45 PM';
  arrival_from = '12:00 AM';
  arrival_to = '11:45 PM';
  duration_from = '0h 00m';
  duration_to = '50h 00m';
  price_from = 'USD 0';
  price_to = 'USD 5000';
  isCollapsed;
  loading=true;
  loaded = false;
  data;
  parameters;
  flights;
  mobVersion;
  webVersion = true;
  width = screen.width;
  isVisible = false;

  showModal = () => {
    this.isVisible = true;
  }

  handleOk = (e) => {
    console.log('点击了确定');
    this.isVisible = false;
  }

  handleCancel = (e) => {
    console.log(e);
    this.isVisible = false;
  }

  flightsData;
  flightsNumber;

  constructor(private activatedRoute: ActivatedRoute, private route: ActivatedRoute, private service: BackendService) {
  }

  ngOnInit() {
    if (this.width < 860 ) {
      this.mobVersion = true;
      this.webVersion = false;
    }
    this.route.params.subscribe((params: Params) => {
      if (params['data'] !== undefined) {
        // Get the param straight
        this.data = params['data'];
        console.log('toook it ' + this.data);
        this.service.getflights(this.data).then((result) => {
          this.flights = result.json();
          console.log(this.flights);
          this.flightsData=this.flights.response.data;
          this.flightsNumber=this.flights.response.number_of_results;
          console.log(this.flights.response.data);
          this.loaded=true;
          this.loading=false;
          console.log(this.flights.response.number_of_results);
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
    let zero = '';
    if (minute === 0) {
      zero = '0';
    }
    return hour + ':' + minute + zero + ' ' + period;
  }

  duration_formatter(value) {
    const hour = Math.floor(value);
    const minute = (value - Math.floor(value)) * 60;
    let zero = '';
    if (minute === 0) {
      zero = '0';
    }
    return hour + 'h ' + minute + zero + 'm';
  }

  onChange_departure(value) {
    this.departure_from = this.time_formatter(value[0]);
    this.departure_to = this.time_formatter(value[1]);
  }

  onChange_arrival(value) {
    this.arrival_from = this.time_formatter(value[0]);
    this.arrival_to = this.time_formatter(value[1]);
  }

  onChange_duration(value) {
    this.duration_from = this.duration_formatter(value[0]);
    this.duration_to = this.duration_formatter(value[1]);
  }

  price_formatter(value) {
    return 'USD ' + value;
  }

  onChange_price(value) {
    this.price_from = this.price_formatter(value[0]);
    this.price_to = this.price_formatter(value[1]);
  }

}
