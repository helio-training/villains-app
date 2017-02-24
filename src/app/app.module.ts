import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import Services from './app.services';

import 'hammerjs';

import AppRoutes, { Components } from './app.routes';
import { VillainFormComponent } from './villians/villain-form/villain-form.component';


@NgModule({

  declarations: [AppComponent, ...Components, VillainFormComponent],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: Services,
  bootstrap: [AppComponent]
})
export class AppModule { }
