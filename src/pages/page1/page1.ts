import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {LiveMatchService} from './page1.service';
import { Page2 } from '../page2/page2';
import { matchinseries } from '../matchinseries/matchinseries';
//import { ObjNgFor } from './objngfor'


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
  providers: [LiveMatchService]

})
export class Page1 {
  public livematchtiles;
  public pastmatchtiles;
  private matchlisterror;
  private ongoingseries;

  constructor(public navCtrl: NavController, private livematchservice: LiveMatchService, private http:Http, public navParams: NavParams) {
    livematchservice.livematches().then(data => {
      this.livematchtiles = data;
    }, error => {
      this.matchlisterror = error;
    });

    livematchservice.ongoiningseries().then(data => {
      this.ongoingseries = data;
    }, error => {
      this.matchlisterror = error;
    });

    // livematchservice.pastmatches().then(data => {
    //  // this.livematchtiles = data['livematch'];
    //   this.pastmatchtiles = data;
    //   // for(let item of this.matchtiles) {
    //   //   this.livematchlist = item['Scorecard'];
    //   // }
    //   // console.log(this.livematchtiles);
    // }, error => {
    //   this.matchlisterror = error;
    // });

  }


   public matchDetails(matchId) {
     console.log(matchId);
     this.navCtrl.push(Page2, {
       'MatchId': matchId
     });
  }
  public seriesDetails(SeriesId) {
    console.log(SeriesId);
    this.navCtrl.push(matchinseries, {
      'SeriesId': SeriesId
    });
  }
}

