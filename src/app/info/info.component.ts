import { Component, OnInit } from '@angular/core';
import {BackendService} from '../backend.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private backendConnect: BackendService) { }

  ngOnInit() {
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
