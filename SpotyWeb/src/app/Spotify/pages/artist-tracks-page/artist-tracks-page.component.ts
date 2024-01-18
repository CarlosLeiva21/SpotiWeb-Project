import { Component } from '@angular/core';
import { switchMap } from 'rxjs';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Item } from '../../interfaces/track.interface';
import { SongsTableComponent } from '../../components/songs-table/songs-table.component';
import { Track } from '../../interfaces/top-track.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'artist-tracks-page',
  standalone: true,
  imports: [SongsTableComponent, RouterModule],
  templateUrl: './artist-tracks-page.component.html'
})
export class ArtistTracksPageComponent {
  public tracks: Track[] = [];
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
        switchMap(({id}) => this.spotifyService.getTopTracks(id))
      )
      .subscribe(track =>{
        for(const item of track.tracks){
          this.tracks.push(item);
          this.tracks_url.push(`https://open.spotify.com/embed/track/${item.id}?utm_source=generator`);
        }
      });

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.spotifyService.getArtistById(id))
      )
      .subscribe(artist =>{
        this.artist_img = artist.images[1].url;
        this.artist_name = artist.name;
        this.artist_spotify = artist.external_urls.spotify;
      })
  }

  volver():void{
    this.location.back();
  }
}
