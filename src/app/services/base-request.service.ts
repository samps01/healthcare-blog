import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BaseRequestService {
  constructor(private http: HttpClient) {}

  public basePostRequest(url, postObj) {
    return this.http.post(url, postObj);
  }

  public baseGetRequest(url) {
    return this.http.get(url);
  }
}
