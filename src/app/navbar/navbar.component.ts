import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {BackendService} from '../backend.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 languages = [{'name':'English',model:'English'},
 {'name':'Deutsche',model:'German'},
  {'name':'Français',model:'Français'},
  {'name':'italiano',model:'Italian'},
 {'name':'Türk',model:'Turkish'},
  {'name':'中文',model:'Chinese'},
  {'name':'Español',model:'Spanish'},
  {'name':'日本語',model:'Japanese'},
  {'name':'русский',model:'Russian'}
];
  country;
  countries;
  currency ='USD' ;
  currencies = ['EGP','USD','EUR'];
  language;
  location;
  isCollapsed = false;
  width = screen.width;
  mobVersion;
  webVersion = true;
  constructor(private backendConnect: BackendService,private http: Http) { }

  ngOnInit() {
this.language='English';
    this.backendConnect.currency = "USD";
    this.http.get('json/countries.json')
      .subscribe(res => this.countries = res.json());
    if (this.width < 860 ) {
      this.mobVersion = true;
      this.webVersion = false;
    }

    this.backendConnect.getLocation().then((result)=> {
      this.location=result.json();
      this.country =this.location.country;
      this.currency=this.location.currency;
      this.backendConnect.country=this.location.country;
      this.backendConnect.city=this.location.city;
  });
}

languageChanged(){
  this.backendConnect.language = this.language;
  console.log(this.backendConnect.language);
  switch(this.backendConnect.language){
case 'English':{
  this.backendConnect.en=true;
  this.backendConnect.gr=false;
  this.backendConnect.it=false;
  this.backendConnect.fr=false;
  this.backendConnect.ch=false;
  this.backendConnect.jp=false;
  this.backendConnect.tr=false;
  this.backendConnect.sp=false;
  this.backendConnect.ru=false;
  break;
}
case 'German':{
  this.backendConnect.en=false;
  this.backendConnect.gr=true;
  this.backendConnect.it=false;
  this.backendConnect.fr=false;
  this.backendConnect.ch=false;
  this.backendConnect.jp=false;
  this.backendConnect.tr=false;
  this.backendConnect.sp=false;
  this.backendConnect.ru=false;
  break;
}
case 'Français':{
  this.backendConnect.en=false;
  this.backendConnect.gr=false;
  this.backendConnect.it=false;
  this.backendConnect.fr=true;
  this.backendConnect.ch=false;
  this.backendConnect.jp=false;
  this.backendConnect.tr=false;
  this.backendConnect.sp=false;
  this.backendConnect.ru=false;
  break;
}
case 'Italian':{
  this.backendConnect.en=false;
  this.backendConnect.gr=false;
  this.backendConnect.it=true;
  this.backendConnect.fr=false;
  this.backendConnect.ch=false;
  this.backendConnect.jp=false;
  this.backendConnect.tr=false;
  this.backendConnect.sp=false;
  this.backendConnect.ru=false;
  break;
}
case 'Turkish':{
  this.backendConnect.en=false;
  this.backendConnect.gr=false;
  this.backendConnect.it=false;
  this.backendConnect.fr=false;
  this.backendConnect.ch=false;
  this.backendConnect.jp=false;
  this.backendConnect.tr=true;
  this.backendConnect.sp=false;
  this.backendConnect.ru=false;
  break;
}
case 'Chinese':{
  this.backendConnect.en=false;
  this.backendConnect.gr=false;
  this.backendConnect.it=false;
  this.backendConnect.fr=false;
  this.backendConnect.ch=true;
  this.backendConnect.jp=false;
  this.backendConnect.tr=false;
  this.backendConnect.sp=false;
  this.backendConnect.ru=false;
  break;
}
case 'Spanish':{
  this.backendConnect.en=false;
  this.backendConnect.gr=false;
  this.backendConnect.it=false;
  this.backendConnect.fr=false;
  this.backendConnect.ch=false;
  this.backendConnect.jp=false;
  this.backendConnect.tr=false;
  this.backendConnect.sp=true;
  this.backendConnect.ru=false;
  break;
}
case 'Japanese':{
  this.backendConnect.en=false;
  this.backendConnect.gr=false;
  this.backendConnect.it=false;
  this.backendConnect.fr=false;
  this.backendConnect.ch=false;
  this.backendConnect.jp=true;
  this.backendConnect.tr=false;
  this.backendConnect.sp=false;
  this.backendConnect.ru=false;
    break;
}
case 'Russian':{
  this.backendConnect.en=false;
  this.backendConnect.gr=false;
  this.backendConnect.it=false;
  this.backendConnect.fr=false;
  this.backendConnect.ch=false;
  this.backendConnect.jp=false;
  this.backendConnect.tr=false;
  this.backendConnect.sp=false;
  this.backendConnect.ru=true;
  break;
}
  }
}



}
