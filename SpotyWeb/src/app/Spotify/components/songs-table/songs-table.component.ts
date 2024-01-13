import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item, Tracks } from '../../interfaces/track.interface';
import { switchMap } from 'rxjs';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'songs-table',
  standalone: true,
  imports: [],
  templateUrl: './songs-table.component.html',
})
export class SongsTableComponent {

  public tracks: Item[] = [];

  album_name: string | null = null;
  album_img: string | null = null;

  constructor(
    private spotifyService: SpotifyService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.album_name = this.activatedRoute.snapshot.paramMap.get('album_name') || null;
    this.album_img = this.activatedRoute.snapshot.paramMap.get('album_img') || null;

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.spotifyService.getAlbumTrack(id))
      )
      .subscribe(track =>{
        for(const item of track.items){
          console.log('aqui: ', item);
          this.tracks.push(item);
        }
      })
  }
}
