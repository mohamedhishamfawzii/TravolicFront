import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpModule } from '@angular/http';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    MenuComponent,
    MainComponent
  ],
  imports: [
    BrowserModule, NgZorroAntdModule.forRoot(), FormsModule ,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,HttpModule
  ],
  providers: [HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
