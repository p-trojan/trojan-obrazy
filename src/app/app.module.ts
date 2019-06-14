import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';

import { CustomMaterialModule } from '../assets/custom-material.module';
import { AppRoutingModule } from './/app-routing.module';
import { BiographyComponent } from './biography/biography.component';
import { NoContentComponent } from './no-content/no-content.component';
import { CreationsComponent } from './creations/creations.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CustomMaterialModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AppToolbarComponent,
    BiographyComponent,
    NoContentComponent,
    CreationsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
