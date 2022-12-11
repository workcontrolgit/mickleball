// search.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private apiURL = environment.youtubeApiUrl;
  private apiToken = environment.youtubeApiKey;
  private maxResults = 10;

  constructor(private http: HttpClient) {}

  getVideos(query: string): Observable<any> {
    const url = `${this.apiURL}?q=${query}&key=${this.apiToken}&part=snippet&type=video&maxResults=${this.maxResults}`;
    return this.http.get(url).pipe(map((response: any) => response.items));
  }
}
