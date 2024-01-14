import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { SongsTableComponent } from '../../components/songs-table/songs-table.component';
import { Item } from '../../interfaces/track.interface';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-album-tracks-page',
  standalone: true,
  imports: [SearchBoxComponent, SongsTableComponent],
  templateUrl: './album-tracks-page.component.html'
})
export class AlbumTracksPageComponent {
  public tracks: Item[] = [];

  public tracks_url: string[] = [];

  public album_name: string | null = null;
  public album_img: string | null = null;

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
          this.tracks.push(item);
          this.tracks_url.push(`https://open.spotify.com/embed/track/${item.id}?utm_source=generator`);
        }
      })
  }
}
