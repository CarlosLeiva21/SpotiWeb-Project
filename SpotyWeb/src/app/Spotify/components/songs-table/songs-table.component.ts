import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item, Tracks } from '../../interfaces/track.interface';
import { switchMap } from 'rxjs';
import { SpotifyService } from '../../services/spotify.service';
import { Track } from '../../interfaces/top-track.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { AlbumTracks } from '../../interfaces/albumTracks.interface';

@Component({
  selector: 'songs-table',
  standalone: true,
  imports: [],
  templateUrl: './songs-table.component.html',
})
export class SongsTableComponent {
  
  @Input()
  public album_tracks?: AlbumTracks;

  @Input()
  public top_tracks: Track[] = []

  @Input()
  public songId: string[] = [];

  constructor(public sanitizer: DomSanitizer) { }

}
