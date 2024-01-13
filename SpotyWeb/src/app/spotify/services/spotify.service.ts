import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item, Track, Tracks } from '../interfaces/track.interface';
import { Album } from '../interfaces/album.interface';
import { Artist } from '../interfaces/artist.interface';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private apiUrl = 'https://api.spotify.com/v1';
  private accessToken = 'BQCHaIQ8L_DOWf73uLbL7sY3N1mVu9gckNrNdRXGOUUJqZ39PmcIApMB3q47ALXEQEI3Fw6rF0GGnizo-ICwcmZAsZusS9q4aQrLh3yUGW9r2EPVYYU';

  constructor(private http: HttpClient) { }

  searchAlbum(artist: string): Observable<Album>{
    const url = `${this.apiUrl}/search?q=${artist}&type=album`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.get<Album>(url, {headers});
  }

  searchSong(song: string): Observable<Track>{
    const url = `${this.apiUrl}/search?q=${song}&type=track`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.get<Track>(url, {headers});
  }

  getNewReleases(): Observable<Album>{
    const url = `${this.apiUrl}/browse/new-releases`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.get<Album>(url, {headers});
  }

  getAlbumTrack(id: string): Observable<Tracks>{
    const url = `${this.apiUrl}/albums/${id}/tracks`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.get<Tracks>(url, {headers});
  }

  getSongById(id: string):Observable<Item>{
    const url = `${this.apiUrl}/tracks/${id}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.get<Item>(url, {headers});
  }
}
