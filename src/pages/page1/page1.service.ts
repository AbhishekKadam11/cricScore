import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class LiveMatchService {

  constructor(private http:Http) {

  }

   livematches() {

    // return this.http
    //   .get(
    //     'https://cricserver11.herokuapp.com/api/matchlist'
    //   //  { headers }
    //   )
    //   .map(res => res.json)
    //   .map((res) => {
    //     return res;
    //   })
     return new Promise(resolve => {
       this.http.get('https://cricserver11.herokuapp.com/api/matchlist')
         .subscribe(data => {
           resolve(data.json());
         });
     });
  }







}
