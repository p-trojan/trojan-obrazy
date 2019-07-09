import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';

import { CustomMaterialModule } from '../assets/custom-material.module';
import { AppRoutingModule } from './/app-routing.module';
import { BiographyComponent } from './biography/biography.component';
import { NoContentComponent } from './no-content/no-content.component';
import { CreationComponent } from './creation/creation.component';
import { HttpClientModule } from '@angular/common/http';
import { CreationCardComponent } from './creation-card/creation-card.component';
import { BiographyCardComponent } from './biography-card/biography-card.component';
import { HomeComponent } from './home/home.component';
import { CreationPreviewOverlayComponent } from './creation-preview-overlay/creation-preview-overlay.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CreationPreviewOverlayService } from './_services/creation-preview-overlay.service';
import { CreationDialogComponent } from './creation-dialog/creation-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CustomMaterialModule,
    AppRoutingModule,
    OverlayModule
  ],
  declarations: [
    AppComponent,
    AppToolbarComponent,
    BiographyComponent,
    BiographyCardComponent,
    NoContentComponent,
    CreationComponent,
    CreationCardComponent,
    CreationDialogComponent,
    HomeComponent,
    CreationPreviewOverlayComponent
  ],
  entryComponents: [ CreationPreviewOverlayComponent ],
  providers: [CreationPreviewOverlayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
