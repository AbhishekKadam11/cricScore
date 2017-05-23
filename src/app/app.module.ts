import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { cricscore } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

//import {LiveMatchService} from '../pages/page1/page1.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    cricscore,
    Page1,
    Page2,
  //  LiveMatchService
  ],
  imports: [
    BrowserModule,
    HttpModule,
 //   LiveMatchService,
    IonicModule.forRoot(cricscore)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    cricscore,
    Page1,
    Page2
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
