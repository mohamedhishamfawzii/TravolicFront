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
  loading;
  loaded ;
  data;
  parameters;
  flights;
  mobVersion;
  filter=true;
  stops = true;
  direct = true;
  price = [0, 8000];

  airlinesCheckboxList = [
    { label: 'Apple\n', value: 'Apple\n', checked: true },
    { label: 'Pear\n', value: 'Pear\n', checked: false },
    { label: 'Orange\n', value: 'Orange\n', checked: false },
  ];

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
    this.loading = true;
    this.loaded = false;
    if (this.width < 860) {
      this.mobVersion = true;
      this.webVersion = false;
    }
    if(this.service.multi){
console.log('coming from multi maaaan !!');
this.filter=false;
this.service.addmulti(this.service.multiArgs).then(
  (result)=>{
        this.flights = result;
        this.flightsDataUnfiltered = this.flights.data;
        this.flightsData=this.flights.data;
        this.flightsNumber = this.flights.number_of_results;
        this.loaded = true;
        this.loading = false;

  }
);
    }else{
    this.route.params.subscribe((params: Params) => {
      if (params['data'] !== undefined) {
        // Get the param straight
        this.data = params['data'];
        this.service.getflights(this.data).then((result) => {
          this.flights = result.json();
          this.flightsDataUnfiltered = this.flights.response.data;
          // this.flightsData = this.flightsDataUnfiltered;
          // console.log("Flights:",this.flightsData);
          this.onChange_filter();
          this.flightsNumber = this.flightsData.number_of_results;
          this.loaded = true;
          this.loading = false;
        });
      }
    });}
  }

  generateAirlines(){

  }

  redirect(link) {
    window.open(link);
  console.log(this.service.addRedirection(link,this.service.country,this.service.city));
  }

  parse_time(value) {
    let hour, minute, period;
    const time = value.split(':', 2);
    hour = Number(time[0]);
    minute = Number(time[1].substring(0,2));
    period = time[1].substring(3,5);

    if(period == 'PM' && hour != 12)
      hour += 12;

    if(period == 'AM' && hour == 12)
      hour = 0;

    return [hour, minute, period];
  }

  parse_duration(value:string){
    let hour:string = '', minute:string = '';

    if(value.indexOf('h') == -1 || value.indexOf('m') == -1){
      return [50,0];
    }

    let i = 0;
    while(value[i] != 'h'){
      hour += value[i];
      i++;
    }
    i++;
    while(value[i] != 'm'){
      minute += value[i];
      i++;
    }
    return [Number(hour),Number(minute)];
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
    let flightsDataFilteredByStops = [];
    let flightsDataFilteredByTimes = [];
    let flightsDataFilteredByDuration = [];

    this.flightsData = [];

    //filter stops into flightsDataFilteredByStops

    this.flightsDataUnfiltered.forEach((ticket, index) => {
      if (this.direct == true) {
        if (ticket.flights.length == 1) {
          flightsDataFilteredByStops.push(ticket);
        }
      }
      if (this.stops == true) {
        if (ticket.flights.length > 1) {
          flightsDataFilteredByStops.push(ticket);
        }
      }
    });

    //filter times into flightsDataFilteredByTimes

    flightsDataFilteredByStops.forEach((ticket, index) => {

      const parsedDeparture_from = this.parse_time(this.departure_from);
      const parsedDeparture_to = this.parse_time(this.departure_to);

      const parsedArrival_from = this.parse_time(this.arrival_from);
      const parsedArrival_to = this.parse_time(this.arrival_to);

      if (Number(ticket.flights[0].depart_at.hour) >= parsedDeparture_from[0]
              && Number(ticket.flights[0].depart_at.hour) <= parsedDeparture_to[0]) {
          if (Number(ticket.flights[ticket.flights.length - 1].arrive_at.hour) >= parsedArrival_from[0]
                  && Number(ticket.flights[ticket.flights.length - 1].arrive_at.hour) <= parsedArrival_to[0]) {
            flightsDataFilteredByTimes.push(ticket);
          }
      }
    });

    //filter duration into flightsDataFilteredByDuration

    flightsDataFilteredByTimes.forEach((ticket, index) => {

      const parsedDuration_from = this.parse_duration(this.duration_from);
      const parsedDuration_to = this.parse_duration(this.duration_to);

      if(ticket.duration != undefined){

        let parsedTicketDuration = this.parse_duration(ticket.duration[0]);

        if(parsedTicketDuration[0] >= parsedDuration_from[0] && parsedTicketDuration[0] <= parsedDuration_to[0]){
          flightsDataFilteredByDuration.push(ticket);
        }

      }

    });


    //filter prices into flightsData

    flightsDataFilteredByDuration.forEach((ticket, index) => {
      if (Number(ticket.price.value) >= this.price[0] && Number(ticket.price.value <= this.price[1])) {
        this.flightsData.push(ticket);
      }
    });

  }
  english(){
    if(this.service.en){
    return true;
  }
  else{
    return false;
  }
  }
  spanish(){
    if(this.service.sp){
    return true;
  }
  else{
    return false;
  }
  }
  italian(){
    if(this.service.it){
    return true;
  }
  else{
    return false;
  }
  }
  russian(){
    if(this.service.ru){
    return true;
  }
  else{
    return false;
  }
  }
  turkish(){
    if(this.service.tr){
    return true;
  }
  else{
    return false;
  }
  }
  chinese(){
    if(this.service.ch){
    return true;
  }
  else{
    return false;
  }
  }
  japanese(){
    if(this.service.jp){
    return true;
  }
  else{
    return false;
  }
  }
  german(){
    if(this.service.gr){
    return true;
  }
  else{
    return false;
  }
  }
  french(){
    if(this.service.fr){
    return true;
  }
  else{
    return false;
  }
  }


}
