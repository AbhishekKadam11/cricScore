import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { MatchService } from '../tab.service';

@Component({
  selector: 'tab1',
  templateUrl: 'tabpage1.html',
  providers: [MatchService]
})
export class Tab1 {
  selectedItem: any;
  matchId: string;
 // private matchdata: {};
  score;
  required;
  starttime;
  matchstatus;
  // team1: string

  constructor(public navCtrl: NavController, public navParams: NavParams, private matchservice: MatchService) {

    this.matchId = navParams.data;

  }
  ngOnInit(){
    this.matchservice.matchinfo(this.matchId).then((data) =>{
   //   this.matchdata = data;
      this.starttime = data['dateTimeGMT'];
      this.required = data['innings-requirement'];
      this.matchstatus = data['matchStarted'];
      this.score = data['score'];
      //  this.navCtrl.push(Page2);
    })
  }





}
