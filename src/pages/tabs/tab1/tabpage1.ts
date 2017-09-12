import {Component} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {MatchService} from '../tab.service';

@Component({
  selector: 'tab1',
  templateUrl: 'tabpage1.html',
 // providers: [MatchService]
})
export class Tab1 {
  selectedItem: any;
  MatchId: string;
  // private matchdata: {};
  score;
  matchdata;
  required;
  starttime;
  matchstatus;
  balldata;
  ballarray=[];
  eachball = [];
  scorecard = [];
  // team1: string

  constructor(public navCtrl: NavController, public navParams: NavParams, private matchservice: MatchService) {

    this.MatchId = navParams.data;

  }

  ngOnInit() {
    this.matchservice.matchinfo(this.MatchId).then((data) => {
         this.matchdata = data;
         console.log(data);
      // this.starttime = data['scoredata']['dateTimeGMT'];
      // this.required = data['scoredata']['innings-requirement'];
      // this.matchstatus = data['scoredata']['matchStarted'];
      // this.score = data['scoredata']['score'];
      // this.balldata = data['balldetails']['data'];
    //  this.scorecarddata = data['balldetails']['data'];
    //   if(this.balldata) {
    //     this.matchstatistics(this.balldata);
    //   }
    //   if(data['summary']['data']) {
    //     this.scorecarddata(data['summary']['data']);
    //   }

    })
  }

  public matchstatistics(matchdata) {
  //  console.log(matchdata);
    for(let item of matchdata) {
        if(item['ball']) {
        //  this.ballarray.push(item['ball']);
          for(let ball of item['ball']) {
            this.ballarray.push(ball);
          }
          }
        }
    }

    public scorecarddata(summary) {
      this.matchservice.scorecardlist(summary);
    }



 //   console.log(this.ballarray);
 // }


}
