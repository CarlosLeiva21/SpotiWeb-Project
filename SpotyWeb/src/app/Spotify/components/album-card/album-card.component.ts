import { Component, Input } from '@angular/core';

@Component({
  selector: 'spotify-album-card',
  standalone: true,
  imports: [],
  templateUrl: './album-card.component.html',
})
export class AlbumCardComponent {

  @Input()
  public imageUrl: string = '';
  @Input()
  public title: string = '';
  @Input()
  public album: string = '';

  searchAlbum(id: string){
    console.log(id)
  }

}
