import {Component} from '@angular/core';

import {NavController, NavParams} from 'ionic-angular';
import {MatchService} from '../tab.service';

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
  balldata;
  ballarray=[];
  eachball = [];
  // team1: string

  constructor(public navCtrl: NavController, public navParams: NavParams, private matchservice: MatchService) {

    this.matchId = navParams.data;

  }

  ngOnInit() {
    this.matchservice.matchinfo(this.matchId).then((data) => {
      //   this.matchdata = data;
      this.starttime = data['scoredata']['dateTimeGMT'];
      this.required = data['scoredata']['innings-requirement'];
      this.matchstatus = data['scoredata']['matchStarted'];
      this.score = data['scoredata']['score'];
      this.balldata = data['balldetails']['data'];
      this.matchstatistics(this.balldata);
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
 //   console.log(this.ballarray);
 // }


}
