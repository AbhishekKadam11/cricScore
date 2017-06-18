import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
// import { Page1 } from '../page1/page1';

@Component({
  selector: 'tab4',
  templateUrl: 'tabpage4.html'
})
export class Tab4 {
  selectedItem: any;
  matchId: string;




  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.matchId = navParams.get('matchId');


  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    // this.navCtrl.push(Page2, {
    //   item: item
    // });
  }

  public matchDetails(matchId) {


  }


}
