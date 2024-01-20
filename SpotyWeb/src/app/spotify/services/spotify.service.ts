import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Item, Track, Tracks } from '../interfaces/track.interface';
import { Album } from '../interfaces/album.interface';
import { Item_Artist} from '../interfaces/artist.interface';
import { TopTracks } from '../interfaces/top-track.interface';
import { AlbumTracks } from '../interfaces/albumTracks.interface';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private apiUrl = 'https://api.spotify.com/v1';
  public accessToken = '';
  public history: { name: string, tag: string }[] = [];

  constructor(private http: HttpClient) {
    /*this.getToken().subscribe(
      response => {
        this.accessToken = response.body.access_token
      }
    )*/
    this.loadLocalStorage();
  }

  //Busca un album por artista
  searchAlbum(artist: string): Observable<Album> {
    const url = `${this.apiUrl}/search?q=${artist}&type=album`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.get<Album>(url, { headers });
  }

  //Busca una cancion por nombre
  searchSong(song: string): Observable<Track> {
    const url = `${this.apiUrl}/search?q=${song}&type=track`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.get<Track>(url, { headers });
  }

  //Obtiene 20 album mas nuevos
  getNewReleases(): Observable<Album> {
    const url = `${this.apiUrl}/browse/new-releases`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.get<Album>(url, { headers });
  }

  //Obtiene canciones de un album
  getAlbumTrack(id: string): Observable<Tracks> {
    const url = `${this.apiUrl}/albums/${id}/tracks`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.get<Tracks>(url, { headers });
  }

  getAlbumById(id: string): Observable<AlbumTracks>{
    const url = `${this.apiUrl}/albums/${id}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.get<AlbumTracks>(url, {headers});
  }

  // este lo usamos para traer la img y url del artista
  getArtistById(id: string): Observable<Item_Artist>{
    const url = `${this.apiUrl}/artists/${id}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.get<Item_Artist>(url, {headers});
  }

  getSongById(id: string):Observable<Item>{
    const url = `${this.apiUrl}/tracks/${id}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.get<Item>(url, { headers });
  }

  //Obtiene top tracks de un artista
  getTopTracks(id: string): Observable<TopTracks> {
    const url = `${this.apiUrl}/artists/${id}/top-tracks?market=US`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return this.http.get<TopTracks>(url, { headers });
  }

  //Obtiene token de acceso
  /*getToken(): Observable<any> {
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
  }*/

  async getToken(): Promise<void> {
    try {
      const url = 'https://accounts.spotify.com/api/token';

      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': '__Host-device_id=AQBb78B-wiPh_DLEQeJXF96zP92T7jIb7kT7gdp_1CiH2pn3rCMAQgcGUQ_Ic4dF_iNZYgWc7ByZdDIfmMJaeU5USwfuwI4K8Y8'
      });

      const body = new HttpParams()
        .set('grant_type', 'client_credentials')
        .set('client_id', 'fb5c812439244b80834f0917d67c876d')
        .set('client_secret', '998569043f1841ac8dad5f700aaea587');

      const response: any = await this.http.post(url, body.toString(), { headers }).toPromise();
      this.accessToken = response.access_token;
    } catch (error) {
      console.error('Error al obtener el token:', error);
      throw error;
    }
  }

  //Actualiza el historial
  updateHistory(name: string, tag: string) {

    const estaPresente: boolean = this.history.some(item => item.name === name && item.tag === tag);

    if (!estaPresente) {
      this.history.push({
        name: name,
        tag: tag
      })
    }

    if(this.history.length > 15){
      this.history.shift()
    }
    localStorage.setItem('Busquedas', JSON.stringify(this.history))
  }

  //Retorna el historial
  get _history() {
    return this.history;
  }

  //Carga el historial desde el local storage
  private loadLocalStorage(): void {
    if (!localStorage.getItem('Busquedas')) return;

    this.history = JSON.parse(localStorage.getItem('Busquedas')!);
  };
}

