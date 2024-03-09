import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UIModule } from './ui/ui.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    UIModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule, 
    CommonModule,
    AdminModule
  ],
  providers: [
  {provide:"baseUrl", useValue:"https://localhost:7182/api",multi:true }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
  