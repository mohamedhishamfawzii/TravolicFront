import {Component, OnInit} from '@angular/core';
import {BackendService} from '../backend.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  mobVersion;
  webVersion = true;
  width = screen.width;
  width_text = 0.8 * (screen.width / 7);

  constructor(private backendConnect: BackendService) {
  }

  ngOnInit() {
    if (this.width < 860) {
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
  }
  }

}
