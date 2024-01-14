import { Component, Input } from '@angular/core';
import { Item } from '../../interfaces/track.interface';
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

  constructor(public sanitizer: DomSanitizer) { }
}
