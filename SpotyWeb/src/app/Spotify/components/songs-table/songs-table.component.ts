import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item, Tracks } from '../../interfaces/track.interface';
import { switchMap } from 'rxjs';
import { SpotifyService } from '../../services/spotify.service';
import { Track } from '../../interfaces/top-track.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'songs-table',
  standalone: true,
  imports: [],
  templateUrl: './songs-table.component.html',
})
export class SongsTableComponent {
  
  @Input()
  public tracks: Item[] = [];

  @Input()
  public top_tracks: Track[] = []

  @Input()
  public img_url: string  | null = "";

  @Input()
  public album_name: string | null = "";

  @Input()
  public songId: string[] = [];

  //public previewUrl: string = '';

  constructor(public sanitizer: DomSanitizer) { }

  ngOnChanges(): void {
    console.log('ACAAAAAAAAAAAAAAAAAAA: ', this.tracks);
    
    //this.previewUrl = `https://open.spotify.com/embed/track/${this.songId}?utm_source=generator`;
  }
}
