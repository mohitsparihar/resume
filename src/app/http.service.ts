import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getResume() {
    return this.httpClient.get('https://mohitsparihar.github.io/massets/resume.json')
  }
}