import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { VillainsService } from './villains.service';
import { ErrorsService } from './errors.service';

import { VillainsListPageComponent } from './pages/villains/villains-list-page/villains-list-page.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    VillainsListPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: 'villains', component: VillainsListPageComponent },
      {
        path: '',
        redirectTo: '/villains',
        pathMatch: 'full'
      },
    ])
  ],
  providers: [VillainsService, ErrorsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
