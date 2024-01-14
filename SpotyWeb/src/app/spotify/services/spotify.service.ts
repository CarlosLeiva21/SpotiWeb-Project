import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item, Track, Tracks } from '../interfaces/track.interface';
import { Album } from '../interfaces/album.interface';
import { Artist } from '../interfaces/artist.interface';
import { TopTracks } from '../interfaces/top-track.interface';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private apiUrl = 'https://api.spotify.com/v1';
  private accessToken = 'BQBNIMAHSbE90jl_yRH13CbBOpKydquZfkC1aL6RUDwESkGkULGPtBkS_w71ycgVaIMVckFtDZF4DXtyMqjpbUeFSlg5NsXGn3PGleQYtkEzFY1YaBQ';

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

  getTopTracks(id: string):Observable<TopTracks>{
    const url = `${this.apiUrl}/artists/${id}/top-tracks?market=US`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.get<TopTracks>(url, {headers});
  }

  getToken() {
    const url = 'https://accounts.spotify.com/api/token';

    // Configurar las cabeceras
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': '__Host-device_id=AQBb78B-wiPh_DLEQeJXF96zP92T7jIb7kT7gdp_1CiH2pn3rCMAQgcGUQ_Ic4dF_iNZYgWc7ByZdDIfmMJaeU5USwfuwI4K8Y8'
    });

    // Configurar los datos del formulario
    const body = new HttpParams()
      .set('grant_type', 'client_credentials')
      .set('client_id', 'fb5c812439244b80834f0917d67c876d')
      .set('client_secret', '998569043f1841ac8dad5f700aaea587');

    // Realizar la solicitud POST
    return this.http.post(url, body.toString(), { headers, observe: 'response' });
  }
}
