import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
// import { Page1 } from '../page1/page1';
import { Tab1 } from '../tabs/tab1/tabpage1';
import { Tab2 } from '../tabs/tab2/tabpage2';
import { Tab3 } from '../tabs/tab3/tabpage3';
import { Tab4 } from '../tabs/tab4/tabpage4';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  selectedItem: any;
  MatchId: string;

  tab1Root = Tab1;
  tab2Root = Tab2;
  tab3Root = Tab3;
  tab4Root = Tab4;
  // tab3Root = Page3;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
   // this.selectedItem = navParams.get('item');
    this.MatchId = navParams.get('MatchId');


  }


  public matchDetails(matchId) {


  }


}
