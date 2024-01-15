import { Component } from '@angular/core';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { SpotifyService } from '../../services/spotify.service';
import { Track } from '../../interfaces/track.interface';
import { CardComponent } from "../../components/card/card.component";
@Component({
    selector: 'search-song-page',
    standalone: true,
    templateUrl: './search-song-page.component.html',
    imports: [SearchBoxComponent, CardComponent]
})
export class SearchSongPageComponent {

  public trackList!: Track;

  constructor(private spotifyService: SpotifyService,){
  }

  ngDoCheck():void{
    if (localStorage.getItem('song')) {
      this.searchSong(JSON.parse(localStorage.getItem('song')!))
      localStorage.removeItem('song')
    }
  }

  searchSong(name: string){

    this.spotifyService.searchSong(name)
      .subscribe(tracks => {
        this.trackList = tracks
      })

    this.spotifyService.updateHistory('song', name)
  }

}
