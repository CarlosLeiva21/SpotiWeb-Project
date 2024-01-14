import { Component, Input, SimpleChanges } from '@angular/core';
import { Artist } from '../../interfaces/track.interface';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'spotify-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card.component.html',
})
export class CardComponent {

  @Input()
  public imageUrl: string = '';
  @Input()
  public title: string = '';
  @Input()
  public artists: Artist[] = [];
  @Input()
  public songId: string = '';

  public previewUrl: string = '';

  constructor(public sanitizer: DomSanitizer) { }

  ngOnChanges(): void {
    this.previewUrl = `https://open.spotify.com/embed/track/${this.songId}?utm_source=generator`;
  }

  searchArtist(id: string){
    console.log(id)
  }

}
