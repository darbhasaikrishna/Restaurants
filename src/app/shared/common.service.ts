import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getRestaurants(params: string): Observable<any> {
    return this.http.get(`http://opentable.herokuapp.com/api/restaurants?city=${params}`);
  }
}
