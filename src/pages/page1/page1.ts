import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {LiveMatchService} from './page1.service';
import { Page2 } from '../page2/page2';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
  providers: [LiveMatchService]
})
export class Page1 {
  public matchtiles;

  constructor(public navCtrl: NavController, private livematchservice: LiveMatchService, private http:Http, public navParams: NavParams) {
    livematchservice.livematches().then(data => {
    //  console.log(data);
      this.matchtiles = data;
    });
  }

   public matchDetails(matchId) {
     console.log(matchId);
     this.navCtrl.push(Page2, {
       'matchId': matchId
     });

    //  this.livematchservice.matchinfo(matchId).then(data =>{
    //    console.log(data);
    //    this.navCtrl.push(Page2);
    // })

  }

}
