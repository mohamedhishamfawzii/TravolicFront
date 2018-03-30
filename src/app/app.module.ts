import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BackendService} from './backend.service';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './main/main.component';
import {FlightsComponent} from './flights/flights.component';
import { HttpModule } from '@angular/http';
import { MenuComponent } from './menu/menu.component';
import { NZ_LOCALE, enUS } from 'ng-zorro-antd';
import { SearchdivComponent } from './searchdiv/searchdiv.component';
import { InfoComponent } from './info/info.component';
import { LoadingpageComponent } from './loadingpage/loadingpage.component';
import { SearchdivresultsComponent } from './searchdivresults/searchdivresults.component';
const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'flights/search', component: FlightsComponent},
  { path: 'flights/search/:data', component: FlightsComponent},
] ;
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    MainComponent,
    SearchdivComponent,
    InfoComponent,FlightsComponent, LoadingpageComponent
    InfoComponent,
    FlightsComponent,
    SearchdivresultsComponent
  ],
  imports: [
    BrowserModule, NgZorroAntdModule.forRoot(), FormsModule ,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,HttpModule,   RouterModule.forRoot(
      appRoutes// <-- debugging purposes only
    )
  ],
  providers: [BackendService ,HttpModule,{ provide: NZ_LOCALE, useValue: enUS }],
  bootstrap: [AppComponent]
})
export class AppModule { }
