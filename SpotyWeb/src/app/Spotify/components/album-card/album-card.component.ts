import { Component, Input } from '@angular/core';
import { Album } from '../../interfaces/track.interface';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'spotify-album-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './album-card.component.html',
})
export class AlbumCardComponent {
  constructor(private router: Router) {}

  @Input()
  public imageUrl: string = '';
  @Input()
  public title: string = '';
  @Input()
  public album_id: string = '';

}
