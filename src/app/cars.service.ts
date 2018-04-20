import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CarsService {
  
    handleError(e) {
      console.log(e);
      return Observable.throw(e.json().message);
  
    }

  baseUrl: string = "http://ergast.com/api/f1/2013/driverStandings.json"
  constructor(public http: Http) { }
  
  getInfo() {
    console.log(this.baseUrl)
    return this.http.get(`${this.baseUrl}`)
      .map((res) => res.json())
      .catch(this.handleError);

  }
}