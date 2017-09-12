import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { cricscore } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { matchinseries } from '../pages/matchinseries/matchinseries';
import { Tab1 } from '../pages/tabs/tab1/tabpage1';
import { Tab2 } from '../pages/tabs/tab2/tabpage2';
import { Tab3 } from '../pages/tabs/tab3/tabpage3';
import { Tab4 } from '../pages/tabs/tab4/tabpage4';
import { ObjNgFor } from '../pages/page1/objngfor';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    cricscore,
    Page1,
    Page2,
    Tab1,
    Tab2,
    Tab3,
    Tab4,
    ObjNgFor,
    matchinseries

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(cricscore,{
      tabsPlacement: 'top',
      platforms: {
        android: {
          tabsPlacement: 'top'
        },
        ios: {
          tabsPlacement: 'top'
        },
        windows:
          {
            tabsPlacement: 'top'
          }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    cricscore,
    Page1,
    Page2,
    Tab1,
    Tab2,
    Tab3,
    Tab4,
    matchinseries
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
