import { Component, OnInit } from '@angular/core';
import {BackendService} from '../backend.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private backendConnect: BackendService) { }
  mobVersion;
  webVersion = true;
  width = screen.width;

  ngOnInit() {
    if (this.width < 860 ) {
      this.mobVersion = true;
      this.webVersion = false;
    }

  }
  english(){
    if(this.backendConnect.en){
    return true;
  }
  else{
    return false;
  }
  }
  spanish(){
    if(this.backendConnect.sp){
    return true;
  }
  else{
    return false;
  }
  }
  italian(){
    if(this.backendConnect.it){
    return true;
  }
  else{
    return false;
  }
  }
  russian(){
    if(this.backendConnect.ru){
    return true;
  }
  else{
    return false;
  }
  }
  turkish(){
    if(this.backendConnect.tr){
    return true;
  }
  else{
    return false;
  }
  }
  chinese(){
    if(this.backendConnect.ch){
    return true;
  }
  else{
    return false;
  }
  }
  japanese(){
    if(this.backendConnect.jp){
    return true;
  }
  else{
    return false;
  }
  }
  german(){
    if(this.backendConnect.gr){
    return true;
  }
  else{
    return false;
  }
  }
  french(){
    if(this.backendConnect.fr){
    return true;
  }
  else{
    return false;
  }}

}
