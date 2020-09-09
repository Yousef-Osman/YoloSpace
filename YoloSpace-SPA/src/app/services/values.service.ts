import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {
  url:string = "http://localhost:2864"
  constructor(private http: HttpClient) { }

  getValues(){
    return this.http.get(this.url + '/api/user');
  }
}
