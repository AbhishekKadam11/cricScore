import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class LiveMatchService {

  constructor(private http:Http) {

  }

   livematches() {
     return new Promise(resolve => {
       this.http.get('https://cricserver11.herokuapp.com/api/scorecardlive')
    //   this.http.get('http://localhost:3000/api/scorecardlive')
         .subscribe(data => {
           console.log(data);
           if(data.status ==200){
             resolve(data.json());
           } else{
             resolve("Unable to fetch data");
           }

         });
     });
  }

  pastmatches() {
    return new Promise(resolve => {
         this.http.get('https://cricserver11.herokuapp.com/api/pastmatches')
    //  this.http.get('http://localhost:3000/api/pastmatches')
        .subscribe(data => {
          if(data.status ==200){
            resolve(data.json());
          } else{
            resolve("Unable to fetch data");
          }
        });
    });
  }

  ongoiningseries() {
    return new Promise(resolve => {
         this.http.get('https://cricserver11.herokuapp.com/api/ongoingseries')
     // this.http.get('http://localhost:3000/api/ongoingseries')
        .subscribe(data => {
          if(data.status ==200){
            resolve(data.json());
          } else{
            resolve("Unable to fetch data");
          }
        });
    });
  }

  matchinfo(matchId) {

    return new Promise(resolve => {
      this.http.get('https://cricserver11.herokuapp.com/api/scorelist/'+ matchId)
        .subscribe(data => {
          if(data.status ===200){
            resolve(data.json());
          } else{
            resolve("Unable to fetch data");
          }
        });
    });
  }





}
