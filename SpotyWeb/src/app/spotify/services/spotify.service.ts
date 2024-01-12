import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Track } from '../interfaces/track.interface';
import { Album } from '../interfaces/album.interface';
import { Artist } from '../interfaces/artist.interface';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private apiUrl = 'https://api.spotify.com/v1';
  private accessToken = 'BQB_WwK8XmLyiRpCT6xkp-4N2Vi7E9q85b9I_aIpNqO4t5uFIU02qPhorWGRagUoxDOceKUnIz5B3yOfVWF6uWcn29UQ5QbMd_h7IlsIsdVlmuAR7Kw';

  constructor(private http: HttpClient) { }

  searchArtist(artist: string): Observable<Artist>{
    const url = `${this.apiUrl}/search?q=${artist}&type=artist`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.get<Artist>(url, {headers});
  }

  searchAlbum(album: string): Observable<Album>{
    const url = `${this.apiUrl}/search?q=${album}&type=album`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.get<Album>(url, {headers});
  }

  searchSong(song: string): Observable<Track>{
    const url = `${this.apiUrl}/search?q=${song}&type=track`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.get<Track>(url, {headers});
  }
}
