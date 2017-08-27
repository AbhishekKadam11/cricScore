/**
 * Created by Admin on 14-06-2017.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class MatchService {

  public scorelistdata;

  constructor(private http:Http) {

  }

  matchinfo(MatchId) {
    return new Promise(resolve => {
     // this.http.get('https://cricserver11.herokuapp.com/api/scorelist/'+ matchId)
      this.http.get('http://localhost:3000/api/scorecard/'+ MatchId)
        .subscribe(data => {
          resolve(data.json());
        });
    });
  }

  scorecardlist(scoredata) {
      this.scorelistdata = scoredata;
      this.setscorecardlist();
  }


 public setscorecardlist() {
    return this.scorelistdata;
  }







}
