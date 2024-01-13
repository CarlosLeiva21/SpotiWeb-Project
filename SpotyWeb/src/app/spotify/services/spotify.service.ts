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
  private accessToken = 'BQDtHgMUIjWN6a6SRylDpjglqo1CdC55VbxSv3jJJ3UXrEjs5jbPn3oCN84uWSNpqNZlMAW_fFapkDdeFlqcUWraoUaSiFfG9zl7h4i11NahP-yvBjY';

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
    const url = `${this.apiUrl}/albums/${id}/tracks?limit=1`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.get<Tracks>(url, {headers});
  }

  getSongById(id: string):Observable<Item>{
    const url = `${this.apiUrl}/tracks/${id}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.get<Item>(url, {headers});
  }
}
