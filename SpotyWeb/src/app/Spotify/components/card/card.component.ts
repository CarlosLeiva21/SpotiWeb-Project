import { Component, Input } from '@angular/core';
import { Artist } from '../../interfaces/track.interface';

@Component({
  selector: 'spotify-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {

  @Input()
  public imageUrl: string = '';
  @Input()
  public title: string = '';
  @Input()
  public artists: Artist[] = [];

  searchArtist(id: string){
    console.log(id)
  }

}
