import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { configuracao } from './configuracao';
import { AngularFireModule } from '@angular/fire/compat'
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxMaskDirective, NgxMaskPipe, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(configuracao),],
  providers: [{ provide: RouteReuseStrategy,   useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
