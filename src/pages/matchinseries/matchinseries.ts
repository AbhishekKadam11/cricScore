import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {MatchInSeriesService} from './matchinseries.service';
import { Page2 } from '../page2/page2';

@Component({
  selector: 'page-page2',
  templateUrl: 'matchinseries.html',
  providers: [MatchInSeriesService]
})
export class matchinseries {
  selectedItem: any;
  MatchId: string;
  SeriesId: string;
  private matchlist;
  private matchlisterror;
  private seriesdata;
  private SeriesName;
  private matchno;
  // private startDate;
  // private venue
  // private venuecontent;
  // private matchresult;

  constructor(public navCtrl: NavController, public navParams: NavParams, public minseries: MatchInSeriesService) {
    // If we navigated to this page, we will have an item available as a nav param
   // this.selectedItem = navParams.get('item');
    this.SeriesId = navParams.get('SeriesId');
    minseries.serieshome(this.SeriesId).subscribe(data => {
      this.matchlist = data['matchlist'];
      this.seriesdata = data['seriesdetails'];
      this.SeriesName = this.seriesdata['SeriesName'];
      this.matchno = this.seriesdata['MatchNo'];
      //this.startDate = this.seriesdata['StartDate'];

      // this.venuecontent = this.venue['content']
      console.log(this.seriesdata);
    }, error => {
      this.matchlisterror = error;
    });

  }


  public matchDetails(matchId) {
    console.log(matchId);
    this.navCtrl.push(Page2, {
      'MatchId': matchId
    });
  }


}
