import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { SongsTableComponent } from '../../components/songs-table/songs-table.component';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { AlbumTracks } from '../../interfaces/albumTracks.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-tracks-page',
  standalone: true,
  imports: [SearchBoxComponent, SongsTableComponent],
  templateUrl: './album-tracks-page.component.html'
})
export class AlbumTracksPageComponent {
  
  public album_tracks!: AlbumTracks;
  public artist_id: string = '';
  public artist_img : string = '';
  public artist_name: string = '';
  public artist_spotify : string = '';
  public tracks_url: string[] = [];

  constructor(
    private spotifyService: SpotifyService,
    private activatedRoute: ActivatedRoute,
    private location: Location) {}

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.spotifyService.getAlbumById(id))
      )
      .subscribe(album => {
        this.artist_id = album.artists[0].id;
        this.spotifyService.getArtistById(this.artist_id)
          .subscribe(artist =>{
            this.artist_img = artist.images[1].url;
            this.artist_name = artist.name;
            this.artist_spotify = artist.external_urls.spotify;
          });
        this.album_tracks = album;
        for(const item of album.tracks.items){
          this.tracks_url.push(`https://open.spotify.com/embed/track/${item.id}?utm_source=generator`);
        }
      });
  }


  getArtist(id:string):void{
    this.spotifyService.getArtistById(id)
      .subscribe(artist =>{
        this.artist_img = artist.images[0].url;
        this.artist_spotify = artist.external_urls.spotify;
        console.log('ERROR ???: ',this.artist_img, ' , ', this.artist_spotify);
      });
  }

  volver():void{
    this.location.back();
  }
}
