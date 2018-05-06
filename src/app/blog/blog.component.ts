import { Component, OnInit } from '@angular/core';
import {BackendService} from '../backend.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
 blog ;
  constructor(private backendConnect: BackendService) { }

  ngOnInit() {
    this.backendConnect.getArticles().then((result) => {
      this.blog = result.json();
      this.blog=this.blog.response;
      
      console.log(this.blog);
    });
  }

}
