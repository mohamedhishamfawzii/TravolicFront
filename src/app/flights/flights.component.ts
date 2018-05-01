import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {BackendService} from '../backend.service';
import {forEach} from '@angular/router/src/utils/collection';

interface MyWindow extends Window {
  myFunction(): void;
}

declare var window: MyWindow;

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  departure = [0, 23];
  arrival = [0, 23];
  departure_from = this.time_formatter(this.departure[0]);
  departure_to = this.time_formatter(this.departure[1]);
  arrival_from = this.time_formatter(this.arrival[0]);
  arrival_to = this.time_formatter(this.arrival[1]);
  duration_from = '0h 00m';
  duration_to = '50h 00m';
  price_from = 'USD 0';
  price_to = 'USD 8000';
  isCollapsed;
  loading = true;
  loaded = false;
  data;
  parameters;
  flights;
  mobVersion;
  stops = true;
  direct = true;
  price = [0, 8000];

  webVersion = true;
  width = screen.width;
  isVisible = false;
  flightsData;
  flightsNumber;
  flightsDataUnfiltered;

  showModal = () => {
    this.isVisible = true;
  };

  handleOk = (e) => {
    console.log('点击了确定');
    this.isVisible = false;
  };

  handleCancel = (e) => {
    console.log(e);
    this.isVisible = false;
  };

  constructor(private activatedRoute: ActivatedRoute, private route: ActivatedRoute, private service: BackendService) {
  }

  ngOnInit() {
    if (this.width < 860) {
      this.mobVersion = true;
      this.webVersion = false;
    }
    this.route.params.subscribe((params: Params) => {
      if (params['data'] !== undefined) {
        // Get the param straight
        this.data = params['data'];
        console.log('took it ' + this.data);
        this.service.getflights(this.data).then((result) => {
          this.flights = result.json();
          console.log(this.flights);
          this.flightsDataUnfiltered = this.flights.response.data;
          this.flightsData = this.flightsDataUnfiltered;
          // console.log("Flights:",this.flightsData);
          this.onChange_filter();
          this.flightsNumber = this.flightsData.number_of_results;
          console.log(this.flights.response.data);
          this.loaded = true;
          this.loading = false;
          console.log(this.flights.response.number_of_results);
        });
      }
    });
    // setTimeout(this.onChange_filter(),1000);
  }

  redirect(link) {
    window.open(link);
  }

  format_time(value) {
    let hour, minute, period;
    const time = value.split(':', 2);
    hour = Number(time[0]);
    minute = Number(time[1].substring(0,2));
    period = time[1].substring(3,5);

    if(period == 'PM')
      hour += 12;

    if(period == 'AM' && hour == 12)
      hour = 0;

    return [hour, minute, period];
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

  price_formatter(value) {
    return 'USD ' + value;
  }

  onChange_departure(value) {
    this.departure_from = this.time_formatter(value[0]);
    this.departure_to = this.time_formatter(value[1]);
    this.onChange_filter();
  }

  onChange_arrival(value) {
    this.arrival_from = this.time_formatter(value[0]);
    this.arrival_to = this.time_formatter(value[1]);
    this.onChange_filter();
  }

  onChange_duration(value) {
    this.duration_from = this.duration_formatter(value[0]);
    this.duration_to = this.duration_formatter(value[1]);
    this.onChange_filter();
  }


  onChange_price(value) {
    this.price_from = this.price_formatter(value[0]);
    this.price_to = this.price_formatter(value[1]);
    this.onChange_filter();
  }


  onChange_filter() {
    let flightsDataDirect = [];
    let flightsDataArrival = [];
    this.flightsData = [];

    this.flightsDataUnfiltered.forEach((ticket, index) => {
      if (this.direct == true) {
        if (ticket.flights.length == 1) {
          flightsDataDirect.push(ticket);
        }
        // else
        //   return;
      }
      if (this.stops == true) {
        if (ticket.flights.length > 1) {
          flightsDataDirect.push(ticket);
        }
        // else
        //   return;
      }
    });

    flightsDataDirect.forEach((ticket, index) => {

      const formattedDeparture_from = this.format_time(this.departure_from);
      const formattedDeparture_to = this.format_time(this.departure_to);

      if (Number(ticket.flights[0].depart_at.hour) >= formattedDeparture_from[0]
              && Number(ticket.flights[0].depart_at.hour) <= formattedDeparture_to[0]) {
          flightsDataArrival.push(ticket);
      }

      const formettedArrival_from = this.format_time(this.arrival_from);
      const formettedArrival_to = this.format_time(this.arrival_to);

      if (Number(ticket.flights[ticket.flights.length - 1].arrive_at.hour) >= formettedArrival_from[0]
              && Number(ticket.flights[ticket.flights.length - 1].arrive_at.hour) <= formettedArrival_to[0]) {
        flightsDataArrival.push(ticket);
      }

    });

    flightsDataArrival.forEach((ticket, index) => {
      if (Number(ticket.price.value) >= this.price[0] && Number(ticket.price.value <= this.price[1])) {
        this.flightsData.push(ticket);
      }
    });
  }
}
