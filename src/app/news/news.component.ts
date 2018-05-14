import { Component, OnInit } from '@angular/core';
import {BackendService} from '../backend.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private backendConnect: BackendService) { }
news;
  ngOnInit() {
    this.backendConnect.getNews().then((result) => {
      this.news = result.json();
      this.news=this.news.response;
      console.log(this.news);
    });
  }


}
