import { Component } from '@angular/core';
import { switchMap } from 'rxjs';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Item } from '../../interfaces/track.interface';
import { SongsTableComponent } from '../../components/songs-table/songs-table.component';
import { Track } from '../../interfaces/top-track.interface';

@Component({
  selector: 'artist-tracks-page',
  standalone: true,
  imports: [SongsTableComponent, RouterModule],
  templateUrl: './artist-tracks-page.component.html'
})
export class ArtistTracksPageComponent {
  public tracks: Track[] = [];

  constructor(
    private spotifyService: SpotifyService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
  
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.spotifyService.getTopTracks(id))
      )
      .subscribe(track =>{
        for(const item of track.tracks){
          console.log('TOP TRACKS: ', item);
          this.tracks.push(item);
        }
      })
  }
}