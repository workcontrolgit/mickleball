// search.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private API_URL = 'https://www.googleapis.com/youtube/v3/search';
  private API_TOKEN = 'AIzaSyAq9W0tD3SJxtn6RE0aUcBseMMz_WcKhAU';

  constructor(private http: HttpClient) {}

  getVideos(query: string): Observable<any> {
    const url = `${this.API_URL}?q=${query}&key=${this.API_TOKEN}&part=snippet&type=video&maxResults=25`;
    return this.http.get(url).pipe(map((response: any) => response.items));
  }
}
