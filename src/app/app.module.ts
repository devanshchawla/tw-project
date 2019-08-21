import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentPlayerComponent } from './current-player/current-player.component';
import { BomberComponent } from './bomber/bomber.component';
import { TerroristComponent } from './terrorist/terrorist.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrentPlayerComponent,
    BomberComponent,
    TerroristComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
