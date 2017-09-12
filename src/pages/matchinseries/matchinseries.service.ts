import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()

export class MatchInSeriesService {

  constructor(private http:Http) {

  }

  serieshome(SeriesId) {
    // return new Promise(resolve => {
    //
    //   //   this.http.get('https://cricserver11.herokuapp.com/api/scorecardlive')
    //   this.http.get('http://localhost:3000/api/serieshome/'+SeriesId)
    //     .subscribe(data => {
    //       if(data.status ==200){
    //         resolve(data.json());
    //       } else{
    //         resolve("Unable to fetch data");
    //       }
    //
    //     });
    // });
    return this.http.get('https://cricserver11.herokuapp.com/api/serieshome/'+SeriesId)
   // return this.http.get('http://localhost:3000/api/serieshome/'+SeriesId)
      .map((res) => res.json())
    //  .catch(this.handleError)
  }






}
