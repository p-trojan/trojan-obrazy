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
import { FlexLayoutModule } from '@angular/flex-layout';
import { CreationCardComponent } from './creations/creation-card.component';
import { CreationDialogComponent } from './creations/creation-dialog.component';
import { BiographyCardComponent } from './biography/biography-card.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CustomMaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AppToolbarComponent,
    BiographyComponent,
    BiographyCardComponent,
    NoContentComponent,
    CreationsComponent,
    CreationCardComponent,
    CreationDialogComponent,
    HomeComponent
  ],
  entryComponents: [ CreationDialogComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
