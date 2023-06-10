import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WeatherService } from './weather.service';
import { locationReducer } from './location-reducer';
import { LocationComponent } from './location/location.component';

@NgModule({
   declarations: [
    AppComponent,
    CurrentWeatherComponent,
    HomePageComponent,
    LocationComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    StoreModule.forRoot({
      loc: locationReducer
    })
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
