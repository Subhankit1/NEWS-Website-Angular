import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  //news api url
  newsApiUrl = 'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json';

  //Every news api url
  everyApiUrl = 'https://saurav.tech/NewsAPI/everything/cnn.json';
  

  //top news
  topHeading():Observable<any>{
    return this._http.get(this.newsApiUrl);
  }
  
  //All News
  everyThing():Observable<any>{
    return this._http.get(this.everyApiUrl);
  }
  
}
