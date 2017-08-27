import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class LiveMatchService {

  constructor(private http:Http) {

  }

   livematches() {
     return new Promise(resolve => {
    //   this.http.get('https://cricserver11.herokuapp.com/api/matchlist')
       this.http.get('http://localhost:3000/api/scorecardlive')
         .subscribe(data => {
           resolve(data.json());
         });
     });
  }

  pastmatches() {
    return new Promise(resolve => {
      //   this.http.get('https://cricserver11.herokuapp.com/api/matchlist')
      this.http.get('http://localhost:3000/api/pastmatches')
        .subscribe(data => {
          resolve(data.json());
        });
    });
  }

  matchinfo(matchId) {

    return new Promise(resolve => {
      this.http.get('https://cricserver11.herokuapp.com/api/scorelist/'+ matchId)
        .subscribe(data => {
          resolve(data.json());
        });
    });
  }





}
