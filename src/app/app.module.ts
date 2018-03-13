import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BackendService} from './backend.service';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpModule } from '@angular/http';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { NZ_LOCALE, enUS } from 'ng-zorro-antd';
import { SearchdivComponent } from './searchdiv/searchdiv.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    MainComponent,
    SearchdivComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule, NgZorroAntdModule.forRoot(), FormsModule ,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,HttpModule
  ],
  providers: [BackendService ,HttpModule,{ provide: NZ_LOCALE, useValue: enUS }],
  bootstrap: [AppComponent]
})
export class AppModule { }
