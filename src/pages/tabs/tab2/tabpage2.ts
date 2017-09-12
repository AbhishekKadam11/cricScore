import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {MatchService} from '../tab.service';

@Component({
  selector: 'tab2',
  templateUrl: 'tabpage2.html',
 // providers: [MatchService]
})
export class Tab2 {
  selectedItem: any;
  matchId: string;
  shownScorecard = null;
  groups = [];
  scorecarddata: any;
  batting = [];
  bowling = [];
  innings=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private matchservice: MatchService) {
    this.matchId = navParams.get('matchId');
    this.scorecarddata = this.matchservice.setscorecardlist();
    if(this.scorecarddata) {
      this.scorecard(this.scorecarddata);
    }


    // for (var i=0; i<10; i++) {
    //   this.groups[i] = {
    //     name: i,
    //     items: []
    //   };
    //   for (var j = 0; j < 3; j++) {
    //     this.groups[i].items.push(i + '-' + j);
    //   }
    // }

  }

  public scorecard(scoredata) {
      // this.batting = scoredata['batting'];
      // this.bowling = scoredata['bowling'];
      for(let bat of scoredata['batting']) {
        for(let bol of scoredata['bowling']) {
          this.innings.push({'batting': bat, 'bowling': bol});
          break;
        }
        }

      }



  toggleScorecard (group) {
    if (this.isGroupShown(group)) {
      this.shownScorecard = null;
    } else {
      this.shownScorecard = group;
    }

  }

  isGroupShown (group) {
    return this.shownScorecard === group;
  };



}
