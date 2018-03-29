import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap ,Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { BackendService } from '../backend.service';
@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
isCollapsed;
data;
parameters;
flights;
  constructor( private activatedRoute: ActivatedRoute, private route: ActivatedRoute , private service :BackendService ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params['data'] !== undefined) {
        // Get the param straight
       this.data = params['data'];
       console.log("toook it "+this.data);
        this.service.getflights(this.data).then((result)=>{
          this.flights=result.json();
          console.log(this.flights);
        });
      }
    });



  }

}
