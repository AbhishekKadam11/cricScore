import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class LiveMatchService {

  constructor(private http:Http) {

  }

   livematches() {
     return new Promise(resolve => {
       this.http.get('https://cricserver11.herokuapp.com/api/matchlist')
         .subscribe(data => {
           resolve(data.json());
         });
     });
  }

  matchinfo(matchId) {
    let requestOptions = new RequestOptions();
    requestOptions.params = matchId;
   //  params.set('unique_id', matchId);
    return new Promise(resolve => {
      this.http.get('https://cricserver11.herokuapp.com/api/scorelist/'+ matchId)
        .subscribe(data => {
          resolve(data.json());
        });
    });
  }





}
