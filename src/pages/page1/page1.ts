import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {LiveMatchService} from './page1.service';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
  providers: [LiveMatchService]
})
export class Page1 {
  public matchtiles;
  constructor(public navCtrl: NavController, private livematchservice: LiveMatchService, private http:Http) {
    // this.livematchservice.livematches().subscribe((result) => {
    //   console.log(result);
    // });
    // this.http.get('https://cricserver11.herokuapp.com/api/matchlist').map(res => res.json()).subscribe(data => {
    //  console.log(data);
    // });
    livematchservice.livematches().then(data => {
      console.log(data['matches']);
      this.matchtiles = data['matches'];
    });


  }



}
