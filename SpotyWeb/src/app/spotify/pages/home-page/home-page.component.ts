import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../interfaces/artist.interface';
import { Album } from '../../interfaces/album.interface';
import { Track } from '../../interfaces/track.interface';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [SearchBoxComponent, CardComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  public trackList!: Track;


  constructor(private spotifyService: SpotifyService){}

  ngOnInit():void{
    this.spotifyService.searchSong('a')
      .subscribe(tracks => {
        this.trackList = tracks
      });
  }

}
