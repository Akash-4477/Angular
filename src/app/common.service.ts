import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  URL="https://jsonplaceholder.typicode.com/posts"
  constructor(private _http:HttpClient) { }
  getRestoList(){
    return this._http.get(this.URL);
  }
}
