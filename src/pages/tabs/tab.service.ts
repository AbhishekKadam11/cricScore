/**
 * Created by Admin on 14-06-2017.
 */
import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class MatchService {

  constructor(private http:Http) {

  }

  matchinfo(matchId) {
    // let requestOptions = new RequestOptions();
    // requestOptions.params = matchId;
    //  params.set('unique_id', matchId);
    return new Promise(resolve => {
      this.http.get('https://cricserver11.herokuapp.com/api/scorelist/'+ matchId)
        .subscribe(data => {
          resolve(data.json());
        });
    });
  }





}
