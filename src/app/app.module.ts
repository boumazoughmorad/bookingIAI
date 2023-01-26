import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { Error403Component } from './shared/error-pages/error403/error403.component';
import { Error404Component } from './shared/error-pages/error404/error404.component';
import { Error500Component } from './shared/error-pages/error500/error500.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './shared/home/home.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { WelcomePageComponent } from './shared/welcome-page/welcome-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'ng-sidebar';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HotelmoduleModule } from './modules/hotelmodule/hotelmodule.module';
import { HotelmoduleComponent } from './modules/hotelmodule/hotelmodule.component';
import { HotelrouteComponent } from './shared/hotelroute/hotelroute.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Error403Component,
    Error404Component,
    Error500Component,
    HomeComponent,
    WelcomePageComponent,
    SidebarComponent,
    FooterComponent,
    HotelrouteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    SidebarModule,
    HttpClientModule,
    RouterModule,
    HotelmoduleModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
