import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artist } from '../interfaces/artist.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private apiUrl = 'https://api.spotify.com/v1';
  private accessToken = 'BQBrflS5ps-jZQjcQavRn3QHu-_ZqxWF3eQ1cxBYm6lvBTwMwJuF-oLZv5RFEZ2ZUfNOLPlzsP6ORpN9Ix_Ro_v8bE86g8_ie0MEy3bOFtH8JJ38ev4';

  constructor(private http: HttpClient) { }

  searchArtist(artist: string): Observable<Artist>{
    const url = `${this.apiUrl}/search?q=${artist}&type=artist`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.get<Artist>(url, {headers});
  }

  searchAlbum(album: string): Observable<Artist>{
    const url = `${this.apiUrl}/search?q=${album}&type=album`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.get<Artist>(url, {headers});
  }
}
