import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Params} from '@angular/router';
import {BackendService} from '../backend.service';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: BackendService) { }
id;
article;
  ngOnInit() {

    this.route.params.subscribe((params: Params) => {
      if (params['id'] !== undefined) {
        // Get the param straight
        this.id = params['id'];
        console.log('took it ' + this.id);
        this.service.getArticle(this.id).then((result)=>{
        this.article=result.json();
        this.article=this.article.response;
         console.log(this.article);
      });
      }
    });
  }

  getUrl(){
  console.log("called",this.article.img)
    return this.article.img ;
  }

}
