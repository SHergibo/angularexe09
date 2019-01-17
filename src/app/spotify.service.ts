import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  static BASE_URL = 'https://api.spotify.com/v1';
  constructor(private http: HttpClient) {
  }

  query(URL: string, params?: Array<string>): Observable<any> {
    let queryURL = `${SpotifyService.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join('&')}`;
    }
    const apikey = 'BQBxF2pPtOWB2cqIFxXttVy602ERYsoSGGNBigtKxzbK36ew2FyHi-VhoiswZBzZpKKjxSKcjLidpuF1KvI';
    const headers: HttpHeaders = new HttpHeaders({'Authorization': `Bearer ${apikey}`});
    return this.http.get(queryURL, {headers: headers});
  }

  search(query: string, type: string): Observable<any> {
    return this.query('/search', [`q=${query}`, `type=${type}`]);
  }

  searchTrack(query: string): Observable<any> {
    return this.search(query, 'track');
  }

  getTracks(id: string): Observable<any> {
    return this.query(`/tracks/${id}`);
  }

  getArtist(id: string): Observable<any> {
    return this.query(`/artists/${id}`);
  }

  getAlbum(id: string): Observable<any> {
    return this.query(`/albums/${id}`);
  }
}
